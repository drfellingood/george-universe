export const radioMoods = [
  "All Signals",
  "After Hours",
  "Neon Rain",
  "Slow Motion",
  "Last Train",
] as const

export type RadioMood = Exclude<(typeof radioMoods)[number], "All Signals">

export type RadioSong = {
  id: string
  title: string
  artist: string
  genre: string
  mood: RadioMood
  cover: string
  audioUrl: string | null
  note: string
}

export const radioSongs: RadioSong[] = [
  {
    id: "signal-after-midnight",
    title: "Signal After Midnight",
    artist: "George Radio House Band",
    genre: "Late-Night Jazz",
    mood: "After Hours",
    cover: "/radio/covers/signal-after-midnight.svg",
    audioUrl: null,
    note: "For the hour when the city finally stops asking questions.",
  },
  {
    id: "glass-taxi",
    title: "Glass Taxi",
    artist: "The Kowloon Lines",
    genre: "Dream Pop",
    mood: "Neon Rain",
    cover: "/radio/covers/glass-taxi.svg",
    audioUrl: null,
    note: "Wet streets, reflected signs, and nowhere urgent to be.",
  },
  {
    id: "room-1107",
    title: "Room 1107",
    artist: "Mira Vale",
    genre: "Ambient Soul",
    mood: "Slow Motion",
    cover: "/radio/covers/room-1107.svg",
    audioUrl: null,
    note: "A quiet track for watching time pass through hotel curtains.",
  },
  {
    id: "terminal-blue",
    title: "Terminal Blue",
    artist: "Night Platform",
    genre: "Minimal Electronic",
    mood: "Last Train",
    cover: "/radio/covers/terminal-blue.svg",
    audioUrl: null,
    note: "The final train has gone; the station keeps humming anyway.",
  },
  {
    id: "soft-machines",
    title: "Soft Machines",
    artist: "Future Memory",
    genre: "Cyber Jazz",
    mood: "Neon Rain",
    cover: "/radio/covers/soft-machines.svg",
    audioUrl: null,
    note: "Warm circuitry and a saxophone trying to remember a human voice.",
  },
  {
    id: "first-light-no-5",
    title: "First Light No. 5",
    artist: "Sunday Static",
    genre: "Instrumental",
    mood: "After Hours",
    cover: "/radio/covers/first-light-no-5.svg",
    audioUrl: null,
    note: "For the moment night ends before you are ready to leave it.",
  },
]
