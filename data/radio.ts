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
    id: "midnight-skylines-george",
    title: "Midnight Skylines",
    artist: "George",
    genre: "Late-Night Electronic",
    mood: "After Hours",
    cover: "/radio/covers/midnight-skylines.jpg",
    audioUrl: "/radio/audio/midnight-skylines.mp3",
    note: "A night drive beneath an imagined city skyline, created by George with Suno.",
  },
  {
    id: "curious-rich-brian",
    title: "Curious",
    artist: "Rich Brian",
    genre: "Alternative Hip-Hop",
    mood: "After Hours",
    cover: "/radio/covers/signal-after-midnight.svg",
    audioUrl: null,
    note: "Restless, intimate, and built for the thoughts that arrive after midnight.",
  },
  {
    id: "nikes-frank-ocean",
    title: "Nikes",
    artist: "Frank Ocean",
    genre: "Alternative R&B",
    mood: "Slow Motion",
    cover: "/radio/covers/room-1107.svg",
    audioUrl: null,
    note: "A blurred opening signal where memory, desire, and distance fold together.",
  },
  {
    id: "pink-and-white-frank-ocean",
    title: "Pink + White",
    artist: "Frank Ocean",
    genre: "R&B",
    mood: "Slow Motion",
    cover: "/radio/covers/first-light-no-5.svg",
    audioUrl: null,
    note: "Warm light and impermanence; beautiful because it already feels remembered.",
  },
  {
    id: "redbone-childish-gambino",
    title: "Redbone",
    artist: "Childish Gambino",
    genre: "Psychedelic Soul",
    mood: "After Hours",
    cover: "/radio/covers/signal-after-midnight.svg",
    audioUrl: null,
    note: "Suspicion turned into a slow-burning groove that never fully relaxes.",
  },
  {
    id: "505-arctic-monkeys",
    title: "505",
    artist: "Arctic Monkeys",
    genre: "Indie Rock",
    mood: "Last Train",
    cover: "/radio/covers/terminal-blue.svg",
    audioUrl: null,
    note: "A return journey powered by longing, gathering speed until restraint disappears.",
  },
  {
    id: "slow-dancing-in-the-dark-joji",
    title: "Slow Dancing in the Dark",
    artist: "Joji",
    genre: "Alternative R&B",
    mood: "Slow Motion",
    cover: "/radio/covers/room-1107.svg",
    audioUrl: null,
    note: "Loneliness made cinematic: heavy, exposed, and suspended in an empty room.",
  },
  {
    id: "after-dark-mr-kitty",
    title: "After Dark",
    artist: "Mr.Kitty",
    genre: "Synthpop",
    mood: "Neon Rain",
    cover: "/radio/covers/soft-machines.svg",
    audioUrl: null,
    note: "A nocturnal pulse for neon streets, private fantasies, and endless forward motion.",
  },
  {
    id: "space-song-beach-house",
    title: "Space Song",
    artist: "Beach House",
    genre: "Dream Pop",
    mood: "Neon Rain",
    cover: "/radio/covers/glass-taxi.svg",
    audioUrl: null,
    note: "Weightless melancholy that makes distance feel enormous and strangely comforting.",
  },
]
