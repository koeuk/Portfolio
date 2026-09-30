'use client'

import { cloneElement, isValidElement, useEffect, useRef, useState, type ReactElement, type Ref } from 'react'
import { cn } from '@/lib/utils'

/**
 * A small stand-in for Vue's <Transition>, so the existing `name-enter-from` /
 * `name-enter-active` / `name-enter-to` (and `leave-*`) CSS keeps working as is.
 *
 * - Toggle with `show`; the child stays mounted until its leave transition ends.
 * - Swap the child's `key` to transition between items; the old one leaves
 *   before the new one enters (Vue's mode="out-in").
 * - The child must be a single DOM element that accepts `className` and `ref`.
 */

type Phase = 'idle' | 'enter-from' | 'enter-to' | 'leave-from' | 'leave-to'

type TransitionChild = ReactElement<{ className?: string; ref?: Ref<HTMLElement> }>

interface TransitionProps {
  name: string
  show?: boolean
  /** Run the enter transition on first mount too */
  appear?: boolean
  children?: TransitionChild | null | false
}

const toMs = (value: string) => {
  const number = parseFloat(value)
  if (!Number.isFinite(number)) return 0
  return value.trim().endsWith('ms') ? number : number * 1000
}

/** Longest transition or animation on the element, delays included, in ms. */
function longestTiming(element: Element) {
  const style = getComputedStyle(element)
  const longest = (durations: string, delays: string) => {
    const d = durations.split(',').map(toMs)
    const l = delays.split(',').map(toMs)
    return Math.max(0, ...d.map((duration, i) => duration + (l[i % l.length] ?? 0)))
  }
  return Math.max(
    longest(style.transitionDuration, style.transitionDelay),
    longest(style.animationDuration, style.animationDelay),
  )
}

const phaseClass = (name: string, phase: Phase) => {
  switch (phase) {
    case 'enter-from': return `${name}-enter-from ${name}-enter-active`
    case 'enter-to': return `${name}-enter-active ${name}-enter-to`
    case 'leave-from': return `${name}-leave-from ${name}-leave-active`
    case 'leave-to': return `${name}-leave-active ${name}-leave-to`
    default: return ''
  }
}

const keyOf = (element: TransitionChild | null) => (element ? (element.key ?? '__single') : null)

export function Transition({ name, show = true, appear = false, children }: TransitionProps) {
  const target = show && isValidElement(children) ? (children as TransitionChild) : null
  const [current, setCurrent] = useState<TransitionChild | null>(target)
  const [phase, setPhase] = useState<Phase>(target && appear ? 'enter-from' : 'idle')
  const nodeRef = useRef<HTMLElement | null>(null)
  const targetRef = useRef(target)
  targetRef.current = target

  const targetKey = keyOf(target)
  const currentKey = keyOf(current)
  const isLeaving = phase === 'leave-from' || phase === 'leave-to'

  // Start entering or leaving when what should be shown changes.
  useEffect(() => {
    if (isLeaving || currentKey === targetKey) return
    if (currentKey === null) {
      setCurrent(targetRef.current)
      setPhase('enter-from')
    } else {
      setPhase('leave-from')
    }
  }, [targetKey, currentKey, isLeaving])

  // Step through the phases: *-from for one frame, then *-to until the CSS finishes.
  useEffect(() => {
    if (phase === 'enter-from' || phase === 'leave-from') {
      let second = 0
      const first = requestAnimationFrame(() => {
        second = requestAnimationFrame(() => setPhase(phase === 'enter-from' ? 'enter-to' : 'leave-to'))
      })
      return () => {
        cancelAnimationFrame(first)
        cancelAnimationFrame(second)
      }
    }

    if (phase === 'enter-to' || phase === 'leave-to') {
      const done = () => {
        if (phase === 'enter-to') {
          setPhase('idle')
          return
        }
        const next = targetRef.current
        setCurrent(next)
        setPhase(next ? 'enter-from' : 'idle')
      }
      const timer = setTimeout(done, (nodeRef.current ? longestTiming(nodeRef.current) : 0) + 20)
      return () => clearTimeout(timer)
    }
  }, [phase])

  // While not leaving, render the latest props of the same child.
  const shown = !isLeaving && target && currentKey === targetKey ? target : current
  if (!shown) return null

  return cloneElement(shown, {
    ref: nodeRef,
    className: cn(shown.props.className, phaseClass(name, phase)),
  })
}
