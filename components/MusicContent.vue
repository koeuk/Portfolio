<template>
  <div class="px-6 py-6 space-y-6">
    <!-- Hidden HTML5 audio element (the actual playback engine) -->
    <audio
      ref="audioEl"
      :src="currentSrc"
      preload="metadata"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @ended="onEnded"
      @play="isPlaying = true"
      @pause="isPlaying = false"
      @error="onError"
    />

    <!-- Now Playing -->
    <section>
      <p class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Now Playing</p>
      <div
        class="relative overflow-hidden rounded-2xl p-5 text-white shadow-xl"
        :style="{ background: `linear-gradient(135deg, ${nowPlaying.colors[0]}, ${nowPlaying.colors[1]})` }"
      >
        <div class="flex items-center gap-4">
          <div class="relative w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z" />
            </svg>
            <span v-if="isPlaying" class="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-ping"></span>
            <span v-if="isPlaying" class="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white"></span>
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-lg font-bold truncate">{{ nowPlaying.title }}</p>
            <p class="text-sm text-white/80 truncate">{{ nowPlaying.artist }}</p>
            <p v-if="nowPlaying.album" class="text-xs text-white/60 mt-0.5">{{ nowPlaying.album }}</p>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="mt-4">
          <div
            class="relative h-1.5 rounded-full bg-white/25 cursor-pointer"
            @click="onSeek($event)"
          >
            <div class="absolute inset-y-0 left-0 rounded-full bg-white" :style="{ width: progressPercent + '%' }"></div>
          </div>
          <div class="flex justify-between text-[11px] text-white/80 mt-1.5 tabular-nums">
            <span>{{ formatTime(currentTime) }}</span>
            <span>{{ formatTime(duration) }}</span>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center justify-center gap-6 mt-3">
          <button
            @click="prev"
            type="button"
            class="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/15 transition-colors"
            aria-label="Previous"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zM9.5 12l8.5 6V6z" />
            </svg>
          </button>
          <button
            @click="togglePlay"
            type="button"
            :disabled="!currentSrc"
            class="p-3 rounded-full bg-white text-primary shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-transform"
            aria-label="Play / pause"
          >
            <svg v-if="!isPlaying" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
          </button>
          <button
            @click="next"
            type="button"
            class="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/15 transition-colors"
            aria-label="Next"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z" />
            </svg>
          </button>
        </div>

        <p v-if="currentTrackId === null" class="text-xs text-white/70 mt-3 text-center">
          Tap a track below to play
        </p>
        <p v-else-if="!currentSrc" class="text-xs text-white/80 mt-3 text-center">
          No audio file linked yet for this track.
        </p>
        <p v-else-if="errorMessage" class="text-xs text-red-100 bg-red-900/40 rounded-lg px-3 py-1.5 mt-3 text-center">
          {{ errorMessage }}
        </p>
      </div>
    </section>

    <!-- Playlist -->
    <section>
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Playlist</p>
        <span class="text-xs text-gray-400 dark:text-gray-500">{{ tracks.length }} tracks</span>
      </div>
      <ul class="space-y-2">
        <li v-for="track in tracks" :key="track.id">
          <button
            @click="play(track)"
            type="button"
            class="w-full group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left"
            :class="{ 'bg-gray-50 dark:bg-white/5': isCurrent(track) }"
          >
            <div
              class="relative w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
              :style="{ background: `linear-gradient(135deg, ${track.colors[0]}, ${track.colors[1]})` }"
            >
              <span v-if="!isCurrent(track) || !isPlaying">{{ track.title.charAt(0) }}</span>
              <span v-else class="flex items-end gap-0.5 h-4">
                <span class="row-bar" style="animation-delay: 0ms"></span>
                <span class="row-bar" style="animation-delay: 150ms"></span>
                <span class="row-bar" style="animation-delay: 300ms"></span>
              </span>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-primary dark:text-white truncate group-hover:translate-x-0.5 transition-transform">
                {{ track.title }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ track.artist }}</p>
            </div>
            <span class="text-xs text-gray-400 dark:text-gray-500 tabular-nums">{{ track.duration }}</span>
            <span
              class="p-1.5 rounded-full transition-all"
              :class="isCurrent(track) && isPlaying
                ? 'text-emerald-500'
                : 'text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-primary dark:group-hover:text-white'"
              aria-hidden="true"
            >
              <svg v-if="!(isCurrent(track) && isPlaying)" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </section>

    <!-- Vibe -->
    <section>
      <p class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Vibe</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in vibeTags"
          :key="tag"
          class="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
        >
          {{ tag }}
        </span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type Track = {
  id: number
  title: string
  artist: string
  album?: string
  duration: string
  colors: [string, string]
  // Path to an MP3 file (or any HTML5-supported audio source).
  // Drop the file in /public/audio/ and reference it like '/audio/filename.mp3'
  audio?: string
}

const tracks: Track[] = [
  { id: 1, title: 'Time To Rise',     artist: 'VannDa ft. Master Kong Nay', duration: '4:38', colors: ['#DC2626', '#EAB308'], audio: '' },
  { id: 2, title: 'Macho',            artist: 'VannDa',                     duration: '3:15', colors: ['#7C3AED', '#DB2777'], audio: '' },
  { id: 3, title: 'Skull 2',          artist: 'VannDa',                     duration: '3:42', colors: ['#1E40AF', '#7C3AED'], audio: '' },
  { id: 4, title: 'Lo-Fi Beats',      artist: 'Chillhop',                   duration: '3:42', colors: ['#8B5CF6', '#EC4899'], audio: '' },
  { id: 5, title: 'Coding Focus',     artist: 'Deep Work',                  duration: '5:18', colors: ['#3B82F6', '#06B6D4'], audio: '' },
  { id: 6, title: 'Late Night Code',  artist: 'Tycho',                      duration: '4:47', colors: ['#6366F1', '#8B5CF6'], audio: '' },
]

const vibeTags = ['Khmer Hip-Hop', 'Lo-Fi', 'Focus', 'Chill', 'Indie']

const audioEl = ref<HTMLAudioElement | null>(null)
const currentTrackId = ref<number | null>(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const errorMessage = ref('')

const nowPlaying = computed<Track>(() => {
  const found = tracks.find(track => track.id === currentTrackId.value)
  return found ?? tracks[0]
})

const currentSrc = computed(() => nowPlaying.value.audio || '')

const progressPercent = computed(() => {
  if (!duration.value) return 0
  return Math.min(100, (currentTime.value / duration.value) * 100)
})

function isCurrent(track: Track) {
  return track.id === currentTrackId.value
}

async function play(track: Track) {
  errorMessage.value = ''
  const switching = currentTrackId.value !== track.id
  currentTrackId.value = track.id

  await nextTick()
  if (!audioEl.value || !track.audio) return

  try {
    if (switching) {
      audioEl.value.currentTime = 0
      await audioEl.value.play()
    } else if (audioEl.value.paused) {
      await audioEl.value.play()
    } else {
      audioEl.value.pause()
    }
  } catch (error) {
    errorMessage.value = 'Browser blocked playback. Tap play again.'
  }
}

async function togglePlay() {
  if (!audioEl.value || !currentSrc.value) return
  try {
    if (audioEl.value.paused) await audioEl.value.play()
    else audioEl.value.pause()
  } catch {
    errorMessage.value = 'Browser blocked playback. Tap play again.'
  }
}

function next() {
  const playable = tracks.filter(track => track.audio)
  if (!playable.length) return
  const index = playable.findIndex(track => track.id === currentTrackId.value)
  const nextTrack = playable[(index + 1) % playable.length] ?? playable[0]
  play(nextTrack)
}

function prev() {
  const playable = tracks.filter(track => track.audio)
  if (!playable.length) return
  const index = playable.findIndex(track => track.id === currentTrackId.value)
  const prevTrack = playable[(index - 1 + playable.length) % playable.length] ?? playable[0]
  play(prevTrack)
}

function onTimeUpdate() {
  if (audioEl.value) currentTime.value = audioEl.value.currentTime
}

function onLoadedMetadata() {
  if (audioEl.value) duration.value = audioEl.value.duration
}

function onEnded() {
  isPlaying.value = false
  next()
}

function onError() {
  errorMessage.value = 'Could not load this audio file.'
  isPlaying.value = false
}

function onSeek(event: MouseEvent) {
  if (!audioEl.value || !duration.value) return
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const ratio = (event.clientX - rect.left) / rect.width
  audioEl.value.currentTime = Math.max(0, Math.min(duration.value, ratio * duration.value))
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const minutes = Math.floor(seconds / 60)
  const remainder = Math.floor(seconds % 60)
  return `${minutes}:${remainder.toString().padStart(2, '0')}`
}

onUnmounted(() => {
  if (audioEl.value) audioEl.value.pause()
})
</script>

<style scoped>
.row-bar {
  display: inline-block;
  width: 2px;
  height: 100%;
  background: currentColor;
  border-radius: 1px;
  animation: row-bounce 0.9s ease-in-out infinite;
  transform-origin: bottom;
}

@keyframes row-bounce {
  0%, 100% { transform: scaleY(0.3); }
  50%      { transform: scaleY(1); }
}
</style>
