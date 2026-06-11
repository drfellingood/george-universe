import Link from "next/link"

const sections = [
  ["01", "All Projects", "/projects"],
  ["02", "Inspiration", "/inspiration"],
  ["03", "Journal", "/journal"],
  ["04", "About", "/about"],
] as const

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col justify-between bg-black px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
      <section className="max-w-6xl">
        <p className="text-xs uppercase tracking-[0.35em] text-white/35">
          Personal universe / Est. now
        </p>
        <h1 className="mt-12 text-[17vw] font-semibold leading-[0.75] tracking-[-0.09em] sm:text-[14vw] lg:text-[10vw]">
          GEORGE
          <span className="block font-light text-white/30">UNIVERSE</span>
        </h1>
        <p className="mt-12 max-w-xl text-lg leading-8 text-white/45 md:text-xl">
          A living archive of things I create, things that shape me, and notes
          gathered along the way.
        </p>
      </section>

      <nav className="mt-24 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {sections.map(([number, label, href]) => (
          <Link
            key={href}
            href={href}
            className="group min-h-32 border-b border-r border-white/10 p-5 transition hover:bg-white hover:text-black"
          >
            <span className="text-[9px] tracking-[0.25em] text-white/25 group-hover:text-black/40">
              {number}
            </span>
            <span className="mt-12 block text-lg tracking-[-0.03em]">
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </main>
  )
}
