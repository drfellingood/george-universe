"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
] as const

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function GlobalNavigation() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 bg-white/[0.72] text-black backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 py-5 md:px-10 md:py-6 lg:px-14">
        <Link
          href="/"
          className="text-sm font-medium tracking-[-0.02em] text-black/80 transition-opacity duration-200 hover:text-black"
        >
          George Universe
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 text-sm md:gap-x-8">
          {navigationItems.map((item) => {
            const isActive = isActivePath(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`transition-opacity duration-200 hover:opacity-100 ${
                  isActive ? "text-black opacity-100" : "text-black opacity-45"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
