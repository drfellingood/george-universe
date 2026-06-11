import Link from "next/link"

type ArchivePlaceholderProps = {
  index: string
  eyebrow: string
  title: string
  description: string
  status?: string
  backHref?: string
  backLabel?: string
}

export function ArchivePlaceholder({
  index,
  eyebrow,
  title,
  description,
  status = "Archive in formation",
  backHref = "/",
  backLabel = "Return to universe",
}: ArchivePlaceholderProps) {
  return (
    <main className="relative flex min-h-[calc(100vh-73px)] flex-col justify-between overflow-hidden bg-black px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[32vw] font-black tracking-[-0.1em] text-white/[0.02]">
          {index}
        </span>
      </div>

      <div className="relative flex justify-between gap-8 text-[10px] uppercase tracking-[0.32em] text-white/30">
        <p>{eyebrow}</p>
        <p>{status}</p>
      </div>

      <section className="relative my-24 max-w-6xl">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
          Section / {index}
        </p>
        <h1 className="text-[18vw] font-semibold leading-[0.76] tracking-[-0.09em] sm:text-[14vw] lg:text-[10vw]">
          {title}
        </h1>
        <p className="mt-10 max-w-2xl border-l border-white/20 pl-6 text-lg leading-8 text-white/45 md:text-xl">
          {description}
        </p>
      </section>

      <div className="relative border-t border-white/10 pt-5">
        <Link
          href={backHref}
          className="text-[10px] uppercase tracking-[0.3em] text-white/40 transition hover:text-white"
        >
          {backLabel} &larr;
        </Link>
      </div>
    </main>
  )
}
