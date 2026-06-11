import Link from "next/link"

const archives = [
  {
    index: "01",
    title: "Movies",
    href: "/inspiration/movies",
    description: "Crime, impossible futures, lost time, and private longing.",
    status: "Open archive",
  },
  {
    index: "02",
    title: "Music",
    href: "/inspiration/music",
    description: "Artists, albums, moods, and sounds that stay in rotation.",
    status: "In formation",
  },
  {
    index: "03",
    title: "Games",
    href: "/inspiration/games",
    description: "Worlds, systems, characters, and memories shaped through play.",
    status: "In formation",
  },
  {
    index: "04",
    title: "Artwork",
    href: "/inspiration/artwork",
    description: "Images, artists, materials, and visual ideas worth preserving.",
    status: "In formation",
  },
] as const

export default function InspirationPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-black px-6 py-14 text-white md:px-10 md:py-20 lg:px-14">
      <header className="border-b border-white/10 pb-16 lg:pb-24">
        <div className="flex justify-between gap-8 text-[10px] uppercase tracking-[0.32em] text-white/30">
          <p>Taste archive / Section 02</p>
          <p>Four paths into the mind</p>
        </div>
        <h1 className="mt-16 text-[17vw] font-semibold leading-[0.75] tracking-[-0.09em] sm:text-[14vw] lg:text-[10vw]">
          INSPIRATION
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-8 text-white/45 md:text-xl">
          A map of the films, sounds, games, and images that shaped how I see
          and what I make.
        </p>
      </header>

      <section className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {archives.map((archive) => (
          <Link
            key={archive.href}
            href={archive.href}
            className="group flex min-h-80 flex-col justify-between border-b border-r border-white/10 p-6 transition hover:bg-white hover:text-black lg:min-h-[430px]"
          >
            <div className="flex justify-between text-[9px] uppercase tracking-[0.25em] text-white/30 group-hover:text-black/40">
              <span>{archive.index}</span>
              <span>{archive.status}</span>
            </div>
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.06em]">
                {archive.title}
              </h2>
              <p className="mt-5 text-sm leading-6 text-white/45 group-hover:text-black/60">
                {archive.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
