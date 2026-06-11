"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  radioMoods,
  radioSongs,
  type RadioSong,
} from "../../data/radio"

const systemNodes = [
  {
    index: "01",
    label: "Taste Archive",
    detail: "Songs / moods / notes",
  },
  {
    index: "02",
    label: "George DJ",
    detail: "Context / sequence / voice",
  },
  {
    index: "03",
    label: "Night Signal",
    detail: "Station / episode / room",
  },
] as const

const roadmap = [
  ["V1", "Room", "Selection, moods, playlist, and visual broadcast state."],
  ["V2", "Signal", "Real audio, timeline controls, and persistent listening."],
  ["V3", "Voice", "AI DJ introductions, TTS, and contextual transitions."],
  ["V4", "Episodes", "Curated broadcasts, visualizer, guests, and archive."],
] as const

export function GeorgeRadio() {
  const [selectedSong, setSelectedSong] = useState<RadioSong>(radioSongs[0])
  const [selectedMood, setSelectedMood] = useState<(typeof radioMoods)[number]>(
    "All Signals",
  )
  const [isPlaying, setIsPlaying] = useState(false)

  const filteredSongs =
    selectedMood === "All Signals"
      ? radioSongs
      : radioSongs.filter((song) => song.mood === selectedMood)

  function chooseMood(mood: (typeof radioMoods)[number]) {
    setSelectedMood(mood)
    setIsPlaying(false)

    if (mood === "All Signals") {
      setSelectedSong(radioSongs[0])
      return
    }

    const firstSong = radioSongs.find((song) => song.mood === mood)
    if (firstSong) setSelectedSong(firstSong)
  }

  function chooseSong(song: RadioSong) {
    setSelectedSong(song)
    setIsPlaying(false)
  }

  return (
    <main className="min-h-[calc(100vh-73px)] bg-[#050505] text-[#e7e2d7]">
      <header className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14 lg:px-14">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="whitespace-nowrap text-[23vw] font-black tracking-[-0.1em] text-white/[0.018]">
            00:17
          </span>
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] text-white/35">
          <Link href="/projects" className="transition hover:text-white">
            &larr; All projects
          </Link>
          <p>George Radio / Private frequency 17.06</p>
          <p className="flex items-center gap-2 text-[#d4bd8a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4bd8a]" />
            Signal online
          </p>
        </div>

        <div className="relative mt-20 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.42em] text-[#d4bd8a]/60">
              A late-night project by George
            </p>
            <h1 className="mt-7 max-w-6xl text-[18vw] font-semibold leading-[0.72] tracking-[-0.095em] sm:text-[14vw] lg:text-[9vw]">
              GEORGE
              <span className="block pl-[12vw] font-light italic text-white/25 lg:pl-[7vw]">
                RADIO
              </span>
            </h1>
          </div>

          <div className="border-l border-white/15 pl-6">
            <p className="text-lg leading-8 text-white/55">
              A private broadcast room for songs that belong to the hours after
              midnight.
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.26em] text-white/25">
              Design / Building / 2026
            </p>
          </div>
        </div>
      </header>

      <section className="grid border-b border-white/10 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
        <div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-14">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/30">
            <p>Now transmitting</p>
            <p>{isPlaying ? "On air" : "Standing by"}</p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-[minmax(240px,420px)_1fr] md:items-end">
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <Image
                src={selectedSong.cover}
                alt={`${selectedSong.title} cover`}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover transition duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4bd8a]/60">
                Pilot transmission / Track {String(radioSongs.indexOf(selectedSong) + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
                {selectedSong.title}
              </h2>
              <p className="mt-5 text-sm uppercase tracking-[0.22em] text-white/45">
                {selectedSong.artist} / {selectedSong.genre}
              </p>
              <p className="mt-8 max-w-md border-l border-[#d4bd8a]/30 pl-5 text-base leading-7 text-white/50">
                {selectedSong.note}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-y border-white/10 py-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={isPlaying ? "Pause visual broadcast" : "Play visual broadcast"}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 text-sm transition hover:bg-[#e7e2d7] hover:text-black"
            >
              {isPlaying ? "II" : ">"}
            </button>

            <div>
              <div className="flex h-8 items-end gap-1" aria-hidden="true">
                {[3, 7, 4, 10, 6, 12, 5, 9, 4, 8, 3, 6, 11, 5, 8, 4].map(
                  (height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className={`w-full bg-[#d4bd8a]/50 transition-all ${
                        isPlaying ? "opacity-100" : "opacity-25"
                      }`}
                      style={{ height: `${height * 2}px` }}
                    />
                  ),
                )}
              </div>
              <div className="mt-3 h-px bg-white/10">
                <div className={`h-px bg-[#d4bd8a] ${isPlaying ? "w-2/5" : "w-0"}`} />
              </div>
              <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-white/25">
                Prototype control / no audio connected
              </p>
            </div>

            <p className="text-[10px] uppercase tracking-[0.26em] text-white/35">
              {selectedSong.mood}
            </p>
          </div>
        </div>

        <aside className="p-6 md:p-10 lg:p-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[10px] uppercase tracking-[0.3em] text-white/30">
            <p>George DJ</p>
            <p>Listening</p>
          </div>
          <p className="mt-10 text-3xl font-light leading-tight tracking-[-0.04em] text-white/65">
            &ldquo;I keep this one for the space between the last train and first
            light.&rdquo;
          </p>
          <div className="mt-12 grid grid-cols-2 gap-px bg-white/10">
            <div className="bg-[#050505] p-4">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">Room</p>
              <p className="mt-5 text-sm text-white/55">Private / 01</p>
            </div>
            <div className="bg-[#050505] p-4">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">Clock</p>
              <p className="mt-5 text-sm text-white/55">00:17 local</p>
            </div>
            <div className="bg-[#050505] p-4">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">Voice</p>
              <p className="mt-5 text-sm text-white/55">Future signal</p>
            </div>
            <div className="bg-[#050505] p-4">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">Source</p>
              <p className="mt-5 text-sm text-white/55">Local archive</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-b border-white/10 px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-white/40">
              Night programming
            </p>
            <p className="mt-5 max-w-[210px] text-sm leading-6 text-white/30">
              Choose a mood, then enter one of the station&apos;s fictional pilot
              signals.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-6">
              {radioMoods.map((mood) => (
                <button
                  key={mood}
                  type="button"
                  onClick={() => chooseMood(mood)}
                  className={`border px-4 py-2 text-[9px] uppercase tracking-[0.22em] transition ${
                    selectedMood === mood
                      ? "border-[#d4bd8a] bg-[#d4bd8a] text-black"
                      : "border-white/15 text-white/40 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>

            <div className="border-l border-t border-white/10">
              {filteredSongs.map((song, index) => (
                <button
                  key={song.id}
                  type="button"
                  onClick={() => chooseSong(song)}
                  className={`group grid w-full gap-5 border-b border-r p-4 text-left transition sm:grid-cols-[48px_72px_1fr_auto] sm:items-center md:p-5 ${
                    selectedSong.id === song.id
                      ? "border-[#d4bd8a]/50 bg-white/[0.045]"
                      : "border-white/10 hover:bg-white hover:text-black"
                  }`}
                >
                  <span className="text-[9px] tracking-[0.25em] text-white/25 group-hover:text-black/35">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="relative hidden aspect-square overflow-hidden sm:block">
                    <Image src={song.cover} alt="" fill sizes="72px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block text-xl tracking-[-0.04em]">{song.title}</span>
                    <span className="mt-2 block text-[9px] uppercase tracking-[0.22em] text-white/30 group-hover:text-black/45">
                      {song.artist} / {song.genre}
                    </span>
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-white/30 group-hover:text-black/45">
                    {song.mood}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.018] px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-white/40">
              Station architecture
            </p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.07em] md:text-7xl">
              HOW THE NIGHT FLOWS
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/35">
            The V1 diagram is conceptual. The DJ, voice, playback, and external
            music services remain future systems.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
          {systemNodes.map((node, index) => (
            <div key={node.label} className="contents">
              <div className="min-h-48 border border-white/15 p-6">
                <p className="text-[9px] tracking-[0.28em] text-[#d4bd8a]/60">{node.index}</p>
                <h3 className="mt-12 text-2xl tracking-[-0.04em]">{node.label}</h3>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                  {node.detail}
                </p>
              </div>
              {index < systemNodes.length - 1 && (
                <span className="hidden text-white/20 lg:block" aria-hidden="true">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="border border-dashed border-white/10 p-5 font-mono text-[10px] uppercase leading-6 tracking-[0.16em] text-white/25">
            Input: mood + time + George&apos;s notes
          </div>
          <div className="border border-dashed border-white/10 p-5 font-mono text-[10px] uppercase leading-6 tracking-[0.16em] text-white/25">
            Future: AI sequence + spoken intro
          </div>
          <div className="border border-dashed border-white/10 p-5 font-mono text-[10px] uppercase leading-6 tracking-[0.16em] text-white/25">
            Output: personal radio episode
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-white/40">
              Future roadmap
            </p>
            <p className="mt-5 text-sm leading-6 text-white/30">
              Build the room first. Add the machinery only when the atmosphere
              knows what it needs.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {roadmap.map(([version, name, description]) => (
              <article key={version} className="min-h-64 border-b border-r border-white/10 p-6">
                <p className="text-[9px] uppercase tracking-[0.26em] text-[#d4bd8a]/55">{version}</p>
                <h3 className="mt-14 text-3xl tracking-[-0.05em]">{name}</h3>
                <p className="mt-5 max-w-sm text-sm leading-6 text-white/35">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
