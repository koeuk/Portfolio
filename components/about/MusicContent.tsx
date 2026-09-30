'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { AudioLines, Music, Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import { buttonClass } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'

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

const BLOCKED_MESSAGE = 'Browser blocked playback. Tap play again.'

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const minutes = Math.floor(seconds / 60)
  const remainder = Math.floor(seconds % 60)
  return `${minutes}:${remainder.toString().padStart(2, '0')}`
}

/** The track's own colour behind white text (a solid swatch; the old design used a gradient). */
const swatch = (track: Track) => ({ background: track.colors[0], color: '#FFFFFF' })

/** Now playing card, playlist and vibe tags, backed by a hidden HTML5 <audio>. */
export function MusicContent() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTrackId, setCurrentTrackId] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')

  const nowPlaying = tracks.find(track => track.id === currentTrackId) ?? tracks[0]
  const currentSrc = nowPlaying.audio || ''
  const progressPercent = duration ? Math.min(100, (currentTime / duration) * 100) : 0

  const isCurrent = (track: Track) => track.id === currentTrackId

  // Stop playback when leaving the page.
  useEffect(() => {
    const audio = audioRef.current
    return () => audio?.pause()
  }, [])

  const play = async (track: Track) => {
    setErrorMessage('')
    const switching = currentTrackId !== track.id
    // Render the new source into <audio> before touching it (Vue's nextTick).
    flushSync(() => setCurrentTrackId(track.id))

    const audio = audioRef.current
    if (!audio) return
    if (!track.audio) {
      // No file for this track: make sure the previous one stops.
      audio.pause()
      return
    }

    try {
      if (switching) {
        audio.currentTime = 0
        await audio.play()
      } else if (audio.paused) {
        await audio.play()
      } else {
        audio.pause()
      }
    } catch {
      setErrorMessage(BLOCKED_MESSAGE)
    }
  }

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio || !currentSrc) return
    try {
      if (audio.paused) await audio.play()
      else audio.pause()
    } catch {
      setErrorMessage(BLOCKED_MESSAGE)
    }
  }

  const step = (direction: 1 | -1) => {
    const playable = tracks.filter(track => track.audio)
    if (!playable.length) return
    const index = playable.findIndex(track => track.id === currentTrackId)
    const target = playable[(index + direction + playable.length) % playable.length] ?? playable[0]
    play(target)
  }

  const onSeek = (event: MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = (event.clientX - rect.left) / rect.width
    audio.currentTime = Math.max(0, Math.min(duration, ratio * duration))
  }

  return (
    <div>
      {/* Hidden HTML5 audio element (the actual playback engine) */}
      <audio
        ref={audioRef}
        src={currentSrc || undefined}
        preload="metadata"
        onTimeUpdate={event => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={event => setDuration(event.currentTarget.duration)}
        onEnded={() => {
          setIsPlaying(false)
          step(1)
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setErrorMessage('Could not load this audio file.')
          setIsPlaying(false)
        }}
      />

      <Section title="Now Playing" className="mb-12">
        <div className="neo bg-main p-4 text-main-fg sm:p-5">
          <div className="flex items-center gap-4">
            <div className="neo relative flex h-16 w-16 flex-shrink-0 items-center justify-center" style={swatch(nowPlaying)}>
              <Music className="h-8 w-8" aria-hidden />
              {isPlaying && (
                <span
                  className="absolute -bottom-1.5 -right-1.5 h-4 w-4 rounded-full border-2 border-border bg-[oklch(72%_0.19_145)]"
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-heading text-lg sm:text-xl">{nowPlaying.title}</p>
              <p className="truncate text-sm">{nowPlaying.artist}</p>
              {nowPlaying.album && <p className="mt-0.5 text-xs">{nowPlaying.album}</p>}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div
              role="progressbar"
              aria-label="Playback position"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progressPercent)}
              onClick={onSeek}
              className="relative h-3 cursor-pointer overflow-hidden rounded-base border-2 border-border bg-bw"
            >
              <div className="absolute inset-y-0 left-0 bg-border" style={{ width: `${progressPercent}%` }} />
            </div>
            <div className="mt-1.5 flex justify-between text-xs tabular-nums">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => step(-1)}
              className={buttonClass('neutral', 'h-10 w-10 px-0 py-0')}
              aria-label="Previous"
            >
              <SkipBack className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={togglePlay}
              disabled={!currentSrc}
              className={buttonClass('neutral', 'h-14 w-14 px-0 py-0')}
              aria-label="Play / pause"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className={buttonClass('neutral', 'h-10 w-10 px-0 py-0')}
              aria-label="Next"
            >
              <SkipForward className="h-5 w-5" />
            </button>
          </div>

          {currentTrackId === null ? (
            <p className="mt-4 text-center text-xs">Tap a track below to play</p>
          ) : !currentSrc ? (
            <p className="mt-4 text-center text-xs">No audio file linked yet for this track.</p>
          ) : (
            errorMessage && (
              <p className="mt-4 rounded-base border-2 border-border bg-bw px-3 py-1.5 text-center text-xs text-fg">
                {errorMessage}
              </p>
            )
          )}
        </div>
      </Section>

      <Section title="Playlist" aside={`${tracks.length} tracks`} className="mb-12">
        <ul className="flex flex-col gap-3">
          {tracks.map(track => {
            const current = isCurrent(track)
            const playing = current && isPlaying
            return (
              <li key={track.id}>
                <button
                  type="button"
                  onClick={() => play(track)}
                  aria-current={current ? 'true' : undefined}
                  className={cn(
                    'neo neo-press group flex w-full items-center gap-3 p-3 text-left',
                    current ? 'bg-main text-main-fg' : 'bg-bw text-fg',
                  )}
                >
                  <span
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-base border-2 border-border text-sm font-heading"
                    style={swatch(track)}
                  >
                    {playing ? <AudioLines className="h-5 w-5" aria-label="Playing" /> : track.title.charAt(0)}
                  </span>
                  <span className="block min-w-0 flex-1">
                    <span className="block truncate font-heading text-sm sm:text-base">{track.title}</span>
                    <span className="block truncate text-xs sm:text-sm">{track.artist}</span>
                  </span>
                  <span className="text-xs tabular-nums">{track.duration}</span>
                  <span
                    className={cn('transition-opacity', playing ? 'opacity-100' : 'opacity-0 group-hover:opacity-100')}
                    aria-hidden="true"
                  >
                    {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section title="Vibe" className="mb-0">
        <div className="flex flex-wrap gap-2">
          {vibeTags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Section>
    </div>
  )
}
