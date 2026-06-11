import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "George Universe",
  description: "A personal universe of films, games and inspirations.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-5 border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur md:px-10 md:py-6">
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.3em]"
          >
            George Universe
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.2em] text-white/60 md:gap-8 md:text-sm">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/inspiration">Inspiration</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}
