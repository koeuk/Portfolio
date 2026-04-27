<template>
  <div class="px-6 py-6 space-y-8">
    <!-- Now Playing -->
    <section>
      <p class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Now Playing</p>
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-amber-500 p-5 text-white shadow-xl">
        <div class="flex items-center gap-4">
          <div class="relative w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z" />
            </svg>
            <span class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white animate-ping"></span>
            <span class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white"></span>
          </div>
          <div class="min-w-0">
            <p class="text-lg font-bold truncate">{{ currentTrack.title }}</p>
            <p class="text-sm text-white/80 truncate">{{ currentTrack.artist }}</p>
            <p class="text-xs text-white/60 mt-1">{{ currentTrack.album }}</p>
          </div>
        </div>

        <!-- Animated equalizer bars -->
        <div class="flex items-end gap-1 h-8 mt-4">
          <span v-for="bar in 24" :key="bar" class="eq-bar" :style="{ animationDelay: `${bar * 60}ms` }"></span>
        </div>
      </div>
    </section>

    <!-- Playlist -->
    <section>
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Playlist</p>
        <span class="text-xs text-gray-400 dark:text-gray-500">{{ tracks.length }} tracks</span>
      </div>
      <ul class="space-y-2">
        <li
          v-for="track in tracks"
          :key="track.id"
          class="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
            :style="{ background: `linear-gradient(135deg, ${track.colors[0]}, ${track.colors[1]})` }"
          >
            {{ track.title.charAt(0) }}
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-semibold text-primary dark:text-white truncate group-hover:translate-x-0.5 transition-transform">
              {{ track.title }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ track.artist }}</p>
          </div>
          <span class="text-xs text-gray-400 dark:text-gray-500 tabular-nums">{{ track.duration }}</span>
          <button
            class="opacity-0 group-hover:opacity-100 p-1.5 rounded-full text-gray-400 hover:text-primary dark:hover:text-white transition-all"
            aria-label="Play"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
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
const currentTrack = {
  title: 'Midnight City',
  artist: 'M83',
  album: 'Hurry Up, We\'re Dreaming',
}

const tracks = [
  { id: 1, title: 'Lo-Fi Beats',           artist: 'Chillhop',         duration: '3:42', colors: ['#8B5CF6', '#EC4899'] },
  { id: 2, title: 'Coding Focus',          artist: 'Deep Work',        duration: '5:18', colors: ['#3B82F6', '#06B6D4'] },
  { id: 3, title: 'Synthwave Drive',       artist: 'The Midnight',     duration: '4:25', colors: ['#F472B6', '#A855F7'] },
  { id: 4, title: 'Acoustic Mornings',     artist: 'Various',          duration: '3:58', colors: ['#F59E0B', '#EF4444'] },
  { id: 5, title: 'Ambient Workspace',     artist: 'Nils Frahm',       duration: '6:12', colors: ['#10B981', '#3B82F6'] },
  { id: 6, title: 'Late Night Code',       artist: 'Tycho',            duration: '4:47', colors: ['#6366F1', '#8B5CF6'] },
]

const vibeTags = ['Lo-Fi', 'Synthwave', 'Ambient', 'Focus', 'Indie', 'Chill']
</script>

<style scoped>
.eq-bar {
  display: inline-block;
  width: 3px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 2px;
  animation: eq-bounce 1s ease-in-out infinite;
  height: 100%;
  transform-origin: bottom;
}

@keyframes eq-bounce {
  0%, 100% { transform: scaleY(0.25); }
  50%      { transform: scaleY(1); }
}
</style>
