import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { movies } from "../../../../data/movies"

type MoviePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return movies.map((movie) => ({ slug: movie.slug }))
}

export async function generateMetadata({
  params,
}: MoviePageProps): Promise<Metadata> {
  const { slug } = await params
  const movie = movies.find((item) => item.slug === slug)

  return movie
    ? {
        title: `${movie.title} | George's Film Archive`,
        description: movie.notes,
      }
    : {}
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { slug } = await params
  const movie = movies.find((item) => item.slug === slug)

  if (!movie) {
    notFound()
  }

  const archiveNumber = movies.findIndex((item) => item.slug === slug) + 1

  return (
    <main className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
        <span className="text-[28vw] font-black tracking-[-0.1em] text-white/[0.02]">
          FILM
        </span>
      </div>

      <header className="relative z-10 border-b border-white/10 px-6 pb-14 pt-12 md:px-10 md:pb-20 md:pt-16 lg:px-14">
        <div className="flex flex-wrap items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] text-white/35">
          <Link
            href="/inspiration/movies"
            className="transition hover:text-white"
          >
            &larr; Taste on film
          </Link>
          <p>Private record / GU-F{archiveNumber.toString().padStart(3, "0")}</p>
        </div>
      </header>

      <section className="relative z-10 grid border-b border-white/10 lg:grid-cols-[minmax(360px,0.8fr)_1.2fr]">
        <div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-14">
          <div className="relative mx-auto aspect-[2/3] max-w-xl overflow-hidden bg-white/5">
            <Image
              src={movie.poster ?? ""}
              alt={`${movie.title} poster`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/35">
              Why it stays
            </p>
            <h1 className="mt-7 max-w-4xl text-[16vw] font-semibold leading-[0.78] tracking-[-0.09em] sm:text-[12vw] lg:text-[7vw]">
              {movie.title}
            </h1>
            <p className="mt-10 max-w-2xl border-l border-white/25 pl-6 text-xl leading-9 text-white/60 md:text-2xl md:leading-10">
              {movie.notes ?? "A film kept inside George's personal archive."}
            </p>
          </div>

          <div className="mt-16 grid gap-12 xl:grid-cols-[1fr_280px]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/30">
                George Taste DNA
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {movie.tasteTags.map((tag, index) => (
                  <span
                    key={tag}
                    className="flex items-center gap-4 border border-white/15 px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/70"
                  >
                    <span className="text-[9px] text-white/25">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <dl className="divide-y divide-white/10 border-y border-white/10 text-xs">
              <div className="grid grid-cols-[90px_1fr] py-4">
                <dt className="uppercase tracking-[0.22em] text-white/25">Year</dt>
                <dd className="text-white/70">{movie.year ?? "Unknown"}</dd>
              </div>
              <div className="grid grid-cols-[90px_1fr] py-4">
                <dt className="uppercase tracking-[0.22em] text-white/25">Made by</dt>
                <dd className="text-white/70">{movie.director ?? "Unknown"}</dd>
              </div>
              <div className="grid grid-cols-[90px_1fr] py-4">
                <dt className="uppercase tracking-[0.22em] text-white/25">World</dt>
                <dd className="leading-5 text-white/70">{movie.genres.join(" / ")}</dd>
              </div>
              <div className="grid grid-cols-[90px_1fr] py-4">
                <dt className="uppercase tracking-[0.22em] text-white/25">George</dt>
                <dd className="text-white/70">
                  {movie.rating ? `${movie.rating}/10` : "Unrated"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="relative z-10 grid gap-10 px-6 py-16 md:px-10 lg:grid-cols-[240px_1fr] lg:px-14 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            Kept alongside
          </p>
          <p className="mt-4 text-xs text-white/25">Personal collections</p>
        </div>

        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {(movie.collections?.length ? movie.collections : ["Uncatalogued"]).map(
            (collection, index) => (
              <div
                key={collection}
                className="min-h-36 border-b border-r border-white/10 p-5"
              >
                <span className="text-[9px] tracking-[0.25em] text-white/20">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <p className="mt-14 text-lg tracking-[-0.03em] text-white/65">
                  {collection}
                </p>
              </div>
            ),
          )}
        </div>
      </section>
    </main>
  )
}
