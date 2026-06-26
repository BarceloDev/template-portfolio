'use client'

import { useState, useEffect, useRef } from 'react'

interface UseCounterOptions {
  start?: number
  end: number
  duration?: number
  enabled?: boolean
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  enabled = true,
}: UseCounterOptions): number {
  const [count, setCount] = useState(start)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3)

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOut(progress)
      setCount(Math.round(start + (end - start) * eased))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [start, end, duration, enabled])

  return count
}
