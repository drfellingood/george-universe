import Link from "next/link"
import {
  projectCategories,
  projects,
  type ProjectStatus,
} from "../../data/projects"

const statusStyles: Record<ProjectStatus, string> = {
  Building: "bg-white text-black",
  "In Progress": "border border-white/35 text-white/70",
  Idea: "border border-dashed border-white/25 text-white/45",
  Completed: "bg-white/10 text-white/60",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-black px-6 py-14 text-white md:px-10 md:py-20 lg:px-14">
      <header className="border-b border-white/10 pb-16 lg:pb-24">
        <div className="flex justify-between gap-8 text-[10px] uppercase tracking-[0.32em] text-white/30">
          <p>Created archive / Section 01</p>
          <p>{projects.length.toString().padStart(2, "0")} artifacts recorded</p>
        </div>

        <h1 className="mt-16 text-[17vw] font-semibold leading-[0.75] tracking-[-0.09em] sm:text-[14vw] lg:text-[10vw]">
          ALL PROJECTS
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-white/45 md:text-xl">
          Games, films, company projects, and design work. Not case studies,
          but artifacts made inside George Universe.
        </p>
      </header>

      <div>
        {projectCategories.map((category, categoryIndex) => {
          const categoryProjects = projects.filter(
            (project) => project.category === category,
          )

          return (
            <section
              key={category}
              className="grid border-b border-white/10 py-14 lg:grid-cols-[240px_1fr] lg:py-20"
            >
              <div className="mb-10 lg:mb-0">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                  {(categoryIndex + 1).toString().padStart(2, "0")} / Category
                </p>
                <h2 className="mt-4 text-2xl tracking-[-0.04em] text-white/75">
                  {category}
                </h2>
                <p className="mt-3 text-xs text-white/25">
                  {categoryProjects.length.toString().padStart(2, "0")} artifact
                  {categoryProjects.length === 1 ? "" : "s"}
                </p>
              </div>

              <div className="border-l border-t border-white/10">
                {categoryProjects.map((project, projectIndex) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group grid min-h-64 border-b border-r border-white/10 p-6 transition hover:bg-white hover:text-black md:grid-cols-[80px_1fr_auto] md:gap-8 lg:min-h-72 lg:p-8"
                  >
                    <p className="text-[9px] uppercase tracking-[0.28em] text-white/25 group-hover:text-black/35">
                      GU-P{(projectIndex + 1).toString().padStart(3, "0")}
                    </p>

                    <div className="mt-12 self-end md:mt-0">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 group-hover:text-black/40">
                        {project.year} / {project.category}
                      </p>
                      <h3 className="mt-4 max-w-2xl text-4xl font-semibold leading-none tracking-[-0.06em] md:text-5xl">
                        {project.title}
                      </h3>
                      <p className="mt-6 max-w-xl text-sm leading-6 text-white/45 group-hover:text-black/60">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-8 self-start md:mt-0">
                      <span
                        className={`inline-block px-3 py-2 text-[9px] uppercase tracking-[0.22em] transition group-hover:border-black/30 ${statusStyles[project.status]}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
