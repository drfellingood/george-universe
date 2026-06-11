export const tasteDna = [
  "Crime",
  "Sci-Fi",
  "Cyberpunk",
  "Jazz",
  "Romance",
  "Time",
  "Loneliness",
  "Dreams",
] as const

export type TasteTag = (typeof tasteDna)[number]

export type Movie = {
  title: string
  slug: string
  year?: number
  director?: string
  genres: string[]
  rating?: number
  poster?: string
  collections?: string[]
  tasteTags: TasteTag[]
  notes?: string
}

export const movies: Movie[] = [
  {
    title: "Pulp Fiction",
    slug: "pulp-fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genres: ["Crime"],
    rating: 10,
    poster: "/posters/pulp-fiction.jpg",
    collections: ["Quentin Tarantino", "Crime"],
    tasteTags: ["Crime"],
    notes:
      "Because dialogue can be rhythm, danger can be funny, and a film can rearrange time without ever losing its pulse.",
  },
  {
    title: "Reservoir Dogs",
    slug: "reservoir-dogs",
    year: 1992,
    director: "Quentin Tarantino",
    genres: ["Crime"],
    rating: 9,
    poster: "/posters/reservoir-dogs.jpg",
    collections: ["Quentin Tarantino", "Crime"],
    tasteTags: ["Crime", "Loneliness"],
    notes:
      "A room full of loyalty, suspicion, and wounded pride. The pressure comes from watching trust disappear in real time.",
  },
  {
    title: "Interstellar",
    slug: "interstellar",
    year: 2014,
    director: "Christopher Nolan",
    genres: ["Sci-Fi", "Drama"],
    rating: 10,
    poster: "/posters/interstellar.jpg",
    collections: ["Christopher Nolan", "Sci-Fi"],
    tasteTags: ["Sci-Fi", "Time", "Loneliness", "Dreams"],
    notes:
      "The scale is cosmic, but the wound is intimate: distance, time, and the fear of missing the life of someone you love.",
  },
  {
    title: "Inception",
    slug: "inception",
    year: 2010,
    director: "Christopher Nolan",
    genres: ["Sci-Fi", "Action"],
    rating: 10,
    poster: "/posters/inception.jpg",
    collections: ["Christopher Nolan", "Sci-Fi", "Leonardo DiCaprio"],
    tasteTags: ["Sci-Fi", "Time", "Dreams"],
    notes:
      "An impossible machine built from memory and regret. I return for the architecture, but stay for the emotional trap inside it.",
  },
  {
    title: "The Dark Knight",
    slug: "the-dark-knight",
    year: 2008,
    director: "Christopher Nolan",
    genres: ["Action", "Crime"],
    rating: 10,
    poster: "/posters/the-dark-knight.jpg",
    collections: ["Christopher Nolan"],
    tasteTags: ["Crime", "Loneliness"],
    notes:
      "Order and chaos staged like an urban myth. Every victory costs something, and every character is isolated by what they believe.",
  },
  {
    title: "Fight Club",
    slug: "fight-club",
    year: 1999,
    director: "David Fincher",
    genres: ["Drama", "Crime"],
    rating: 10,
    poster: "/posters/fight-club.jpg",
    collections: ["Crime"],
    tasteTags: ["Crime", "Loneliness", "Dreams"],
    notes:
      "A violent fantasy about escaping the life you were told to want. Ugly, magnetic, and impossible to watch passively.",
  },
  {
    title: "Her",
    slug: "her",
    year: 2013,
    director: "Spike Jonze",
    genres: ["Sci-Fi", "Romance", "Drama"],
    rating: 10,
    poster: "/posters/her.jpg",
    collections: ["Sci-Fi", "Romance"],
    tasteTags: ["Sci-Fi", "Cyberpunk", "Romance", "Loneliness"],
    notes:
      "The future here is soft, warm, and unbearably lonely. Technology matters less than the need to be understood by someone.",
  },
  {
    title: "About Time",
    slug: "about-time",
    year: 2013,
    director: "Richard Curtis",
    genres: ["Romance", "Drama"],
    rating: 10,
    poster: "/posters/about-time.jpg",
    collections: ["Romance"],
    tasteTags: ["Romance", "Time"],
    notes:
      "Time travel becomes a reason to notice ordinary life. Its real fantasy is not changing the past, but learning to be present.",
  },
  {
    title: "La La Land",
    slug: "la-la-land",
    year: 2016,
    director: "Damien Chazelle",
    genres: ["Romance", "Drama", "Music"],
    rating: 10,
    poster: "/posters/la-la-land.jpg",
    collections: ["Romance"],
    tasteTags: ["Jazz", "Romance", "Loneliness", "Dreams"],
    notes:
      "For the tension between love and ambition, and for the ache of imagining the life that almost happened.",
  },
  {
    title: "The Wolf of Wall Street",
    slug: "the-wolf-of-wall-street",
    year: 2013,
    director: "Martin Scorsese",
    genres: ["Crime", "Drama"],
    rating: 10,
    poster: "/posters/the-wolf-of-wall-street.jpg",
    collections: ["Leonardo DiCaprio", "Crime"],
    tasteTags: ["Crime", "Dreams"],
    notes:
      "A fever dream of appetite without limits. The spectacle is intoxicating; the emptiness underneath it is the reason it stays.",
  },
]
