"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { movies, tasteDna, type Movie } from "../../../data/movies"

const archivePlacements = [
  "md:col-span-5 lg:col-span-3",
  "mt-16 md:col-span-3 md:mt-36 lg:col-span-2",
  "md:col-span-4 md:mt-10 lg:col-span-3 lg:mt-24",
  "mt-10 md:col-span-3 md:mt-0 lg:col-span-2 lg:mt-44",
  "md:col-span-5 md:mt-28 lg:col-span-3",
  "mt-20 md:col-span-4 md:mt-10 lg:col-span-2",
  "md:col-span-3 md:mt-36 lg:col-span-3",
  "mt-12 md:col-span-5 md:mt-0 lg:col-span-2 lg:mt-36",
  "md:col-span-4 md:mt-24 lg:col-span-3",
  "mt-16 md:col-span-3 md:mt-8 lg:col-span-2 lg:mt-28",
]

export default function MoviesPage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(movies[0])
  const [selectedGenre, setSelectedGenre] = useState("All")

  const genres = ["All", ...new Set(movies.flatMap((movie) => movie.genres))]
  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genres.includes(selectedGenre))

  function selectGenre(genre: string) {
    const nextMovies =
      genre === "All"
        ? movies
        : movies.filter((movie) => movie.genres.includes(genre))

    setSelectedGenre(genre)
    setSelectedMovie(nextMovies[0] ?? null)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
        <div className="whitespace-nowrap text-[21vw] font-black tracking-[-0.09em] text-white/[0.025]">
          CINEMA
        </div>
      </div>

      <header className="relative z-10 border-b border-white/10 px-6 pb-16 pt-14 md:px-10 lg:px-14 lg:pb-24 lg:pt-20">
        <div className="flex items-start justify-between gap-8 text-[10px] uppercase tracking-[0.32em] text-white/35">
          <p>Inspiration Archive / 001</p>
          <p>A map of recurring obsessions</p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.45em] text-white/35">
              Private Film Index
            </p>
            <h1 className="max-w-5xl text-[18vw] font-black leading-[0.72] tracking-[-0.095em] sm:text-[15vw] lg:text-[10vw]">
              TASTE
              <span className="block pl-[13vw] font-light italic text-white/30 lg:pl-[8vw]">
                ON FILM
              </span>
            </h1>
          </div>

          <p className="max-w-sm border-l border-white/20 pl-5 text-sm leading-6 text-white/45">
            These are not the films everyone should see. They are the films
            that explain what I keep looking for: danger, impossible worlds,
            lost time, and people trying to reach each other.
          </p>
        </div>
      </header>

      <section className="relative z-10 border-b border-white/10 bg-white/[0.025] px-6 py-14 md:px-10 lg:px-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-white/50">
              George Taste DNA
            </p>
            <p className="mt-5 max-w-[220px] text-sm leading-6 text-white/35">
              Eight signals running through the archive. Together, they form
              the reason these films are here.
            </p>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
            {tasteDna.map((tag, index) => (
              <div
                key={tag}
                className="group min-h-28 border-b border-r border-white/10 p-4 transition hover:bg-white hover:text-black md:min-h-36 md:p-5"
              >
                <span className="block text-[9px] tracking-[0.25em] text-white/20 transition group-hover:text-black/40">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="mt-9 block text-lg uppercase tracking-[-0.03em] text-white/70 transition group-hover:text-black md:mt-14 md:text-xl">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 grid gap-16 px-6 py-16 md:px-10 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-14 lg:py-24">
        <div>
          <div className="mb-14 flex flex-wrap items-center gap-2 border-b border-white/10 pb-6">
            <p className="mr-5 text-[10px] uppercase tracking-[0.3em] text-white/30">
              Follow a genre
            </p>
            {genres.map((genre) => (
              <button
                key={genre}
                type="button"
                onClick={() => selectGenre(genre)}
                className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition ${
                  selectedGenre === genre
                    ? "border-white bg-white text-black"
                    : "border-white/15 text-white/45 hover:border-white/50 hover:text-white"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-12 md:gap-x-8 md:gap-y-0">
            {filteredMovies.map((movie, index) => (
              <article
                key={movie.title}
                className={`group relative ${archivePlacements[index % archivePlacements.length]}`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedMovie(movie)}
                  aria-pressed={selectedMovie?.title === movie.title}
                  className={`relative block aspect-[2/3] w-full cursor-pointer overflow-hidden bg-white/5 text-left transition duration-500 hover:z-20 hover:-translate-y-3 hover:rotate-1 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                    selectedMovie?.title === movie.title
                      ? "ring-1 ring-white/80 ring-offset-4 ring-offset-black"
                      : ""
                  }`}
                >
                  <Image
                    src={movie.poster ?? ""}
                    alt={`${movie.title} poster`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
                    className="object-cover opacity-75 grayscale-[20%] transition duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10 opacity-50 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <h2 className="text-base font-semibold leading-tight">
                      {movie.title}
                    </h2>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/55">
                      {movie.director} / {movie.year}
                    </p>
                  </div>
                </button>

                <Link
                  href={`/inspiration/movies/${movie.slug}`}
                  className="absolute bottom-14 left-3 right-3 z-30 translate-y-2 border border-white/25 bg-black/85 px-3 py-3 text-center text-[9px] uppercase tracking-[0.24em] text-white/70 opacity-0 backdrop-blur transition hover:bg-white hover:text-black focus:translate-y-0 focus:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Open archive record
                </Link>

                <div className="mt-4 flex items-start justify-between gap-4 border-t border-white/10 pt-3 text-[9px] uppercase tracking-[0.24em] text-white/30">
                  <span>GU-F{(index + 1).toString().padStart(3, "0")}</span>
                  <span className="max-w-[70%] text-right text-white/45">
                    {movie.tasteTags.join(" / ")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          {selectedMovie && (
            <div className="sticky top-28">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[10px] uppercase tracking-[0.3em] text-white/35">
                <p>George&apos;s Film Dossier</p>
                <p>Personal archive</p>
              </div>

              <div className="relative mt-7 aspect-[16/10] overflow-hidden bg-white/5">
                <Image
                  src={selectedMovie.poster ?? ""}
                  alt=""
                  fill
                  sizes="360px"
                  className="scale-110 object-cover opacity-55 blur-[1px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.3em] text-white/60">
                  Kept in rotation / {selectedMovie.year}
                </p>
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-[0.32em] text-white/30">
                Why it stays
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.9] tracking-[-0.06em] lg:text-5xl">
                {selectedMovie.title}
              </h2>

              <p className="mt-6 border-l border-white/25 pl-5 text-base leading-7 text-white/60">
                {selectedMovie.notes}
              </p>

              <div className="mt-8">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                  Taste signature
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedMovie.tasteTags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <dl className="mt-9 divide-y divide-white/10 border-y border-white/10 text-xs">
                <div className="grid grid-cols-[90px_1fr] py-4">
                  <dt className="uppercase tracking-[0.24em] text-white/25">Made by</dt>
                  <dd className="text-white/70">{selectedMovie.director}</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr] py-4">
                  <dt className="uppercase tracking-[0.24em] text-white/25">World</dt>
                  <dd className="text-white/70">{selectedMovie.genres.join(" / ")}</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr] py-4">
                  <dt className="uppercase tracking-[0.24em] text-white/25">George</dt>
                  <dd className="leading-5 text-white/70">
                    {selectedMovie.rating ? `${selectedMovie.rating}/10` : "Unrated"}
                  </dd>
                </div>
                <div className="grid grid-cols-[90px_1fr] py-4">
                  <dt className="uppercase tracking-[0.24em] text-white/25">Collection</dt>
                  <dd className="leading-5 text-white/70">
                    {selectedMovie.collections?.join(" / ") ?? "Uncatalogued"}
                  </dd>
                </div>
              </dl>

              <Link
                href={`/inspiration/movies/${selectedMovie.slug}`}
                className="mt-6 flex items-center justify-between border border-white/20 px-4 py-4 text-[10px] uppercase tracking-[0.25em] text-white/55 transition hover:bg-white hover:text-black"
              >
                Enter full film record
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          )}
        </aside>
      </section>
    </main>
  )
}
