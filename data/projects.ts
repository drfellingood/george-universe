export const projectCategories = [
  "Games",
  "Films",
  "Company Projects",
  "Design",
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export type ProjectStatus =
  | "Building"
  | "In Progress"
  | "Idea"
  | "Completed"

export type ProjectLink = {
  label: string
  href: string
}

export type DevelopmentLogEntry = {
  date: string
  title: string
  note: string
}

export type Project = {
  title: string
  slug: string
  category: ProjectCategory
  year: number
  status: ProjectStatus
  description: string
  cover: string | null
  gallery: string[]
  links: ProjectLink[]
  developmentLog: DevelopmentLogEntry[]
}

export const projects: Project[] = [
  {
    title: "George Universe",
    slug: "george-universe",
    category: "Design",
    year: 2026,
    status: "Building",
    description:
      "A lifelong digital archive for creations, inspirations, memories, and ideas.",
    cover: null,
    gallery: [],
    links: [],
    developmentLog: [],
  },
  {
    title: "Shenzhen Jazz Bar",
    slug: "shenzhen-jazz-bar",
    category: "Films",
    year: 2026,
    status: "In Progress",
    description:
      "A film artifact in development, shaped around place, atmosphere, and jazz.",
    cover: null,
    gallery: [],
    links: [],
    developmentLog: [],
  },
  {
    title: "Slot Roguelike",
    slug: "slot-roguelike",
    category: "Games",
    year: 2026,
    status: "Idea",
    description:
      "An early game concept exploring the tension between chance, repetition, and progression.",
    cover: null,
    gallery: [],
    links: [],
    developmentLog: [],
  },
  {
    title: "Winsup Australia",
    slug: "winsup-australia",
    category: "Company Projects",
    year: 2026,
    status: "Completed",
    description:
      "A completed company project preserved as part of George's professional archive.",
    cover: null,
    gallery: [],
    links: [],
    developmentLog: [],
  },
]
