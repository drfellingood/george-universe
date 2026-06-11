import type { Metadata } from "next"
import { GlobalNavigation } from "./components/global-navigation"
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
        <GlobalNavigation />

        {children}
      </body>
    </html>
  )
}
