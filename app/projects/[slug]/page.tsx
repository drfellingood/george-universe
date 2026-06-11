import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects, type ProjectStatus } from "../../../data/projects"
import { GeorgeRadio } from "../../components/george-radio"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

const statusStyles: Record<ProjectStatus, string> = {
  Building: "bg-white text-black",
  "In Progress": "border border-white/35 text-white/70",
  Idea: "border border-dashed border-white/25 text-white/45",
  Completed: "bg-white/10 text-white/60",
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  return project
    ? {
        title: `${project.title} | George Universe`,
        description: project.description,
      }
    : {}
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  if (project.slug === "george-radio") {
    return <GeorgeRadio />
  }

  const archiveNumber = projects.findIndex((item) => item.slug === slug) + 1

  return (
    <main className="min-h-[calc(100vh-73px)] bg-black text-white">
      <header className="border-b border-white/10 px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16 lg:px-14">
        <div className="flex flex-wrap items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] text-white/30">
          <Link href="/projects" className="transition hover:text-white">
            &larr; All projects
          </Link>
          <p>Artifact GU-P{archiveNumber.toString().padStart(3, "0")}</p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-white/35">
              {project.category} / {project.year}
            </p>
            <h1 className="mt-7 max-w-6xl text-[15vw] font-semibold leading-[0.78] tracking-[-0.09em] sm:text-[12vw] lg:text-[8vw]">
              {project.title}
            </h1>
          </div>

          <div className="border-l border-white/15 pl-6">
            <span
              className={`inline-block px-3 py-2 text-[9px] uppercase tracking-[0.22em] ${statusStyles[project.status]}`}
            >
              {project.status}
            </span>
            <p className="mt-7 text-base leading-7 text-white/55">
              {project.description}
            </p>
          </div>
        </div>
      </header>

      <section className="grid border-b border-white/10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="relative min-h-[45vh] overflow-hidden border-b border-white/10 bg-white/[0.025] lg:min-h-[65vh] lg:border-b-0 lg:border-r">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={`${project.title} cover`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[24vw] font-black tracking-[-0.1em] text-white/[0.025] lg:text-[16vw]">
                {archiveNumber.toString().padStart(2, "0")}
              </span>
              <p className="absolute bottom-8 left-6 text-[10px] uppercase tracking-[0.3em] text-white/25 md:left-10 lg:left-14">
                Cover image awaiting archive
              </p>
            </div>
          )}
        </div>

        <dl className="divide-y divide-white/10 px-6 py-8 text-xs md:px-10 lg:px-8">
          <div className="grid grid-cols-[100px_1fr] py-5">
            <dt className="uppercase tracking-[0.24em] text-white/25">Category</dt>
            <dd className="text-white/70">{project.category}</dd>
          </div>
          <div className="grid grid-cols-[100px_1fr] py-5">
            <dt className="uppercase tracking-[0.24em] text-white/25">Year</dt>
            <dd className="text-white/70">{project.year}</dd>
          </div>
          <div className="grid grid-cols-[100px_1fr] py-5">
            <dt className="uppercase tracking-[0.24em] text-white/25">Status</dt>
            <dd className="text-white/70">{project.status}</dd>
          </div>
          <div className="grid grid-cols-[100px_1fr] py-5">
            <dt className="uppercase tracking-[0.24em] text-white/25">Slug</dt>
            <dd className="break-all text-white/45">{project.slug}</dd>
          </div>
        </dl>
      </section>

      <section className="border-b border-white/10 px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/35">
              Gallery
            </p>
            <p className="mt-4 text-xs text-white/25">
              {project.gallery.length.toString().padStart(2, "0")} images
            </p>
          </div>

          {project.gallery.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-[4/3] overflow-hidden bg-white/5"
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex min-h-52 items-end border border-dashed border-white/15 p-6">
              <p className="max-w-md text-sm leading-6 text-white/30">
                Gallery material has not been added to this artifact yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="grid border-b border-white/10 lg:grid-cols-2">
        <div className="border-b border-white/10 px-6 py-16 md:px-10 lg:border-b-0 lg:border-r lg:px-14 lg:py-20">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            External links
          </p>
          {project.links.length > 0 ? (
            <div className="mt-10 border-t border-white/10">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between border-b border-white/10 py-5 text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                  <span aria-hidden="true">&nearr;</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm text-white/30">
              No external links recorded.
            </p>
          )}
        </div>

        <div className="px-6 py-16 md:px-10 lg:px-14 lg:py-20">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            Development log
          </p>
          {project.developmentLog.length > 0 ? (
            <div className="mt-10 border-t border-white/10">
              {project.developmentLog.map((entry) => (
                <article key={`${entry.date}-${entry.title}`} className="border-b border-white/10 py-6">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                    {entry.date}
                  </p>
                  <h2 className="mt-3 text-xl tracking-[-0.03em]">
                    {entry.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {entry.note}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm text-white/30">
              No development records added yet.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
