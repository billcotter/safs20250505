"use client"

import { useState, useEffect, type TouchEvent } from "react"

interface UseSwipeProps {
  onSwipeLeft: () => void
  onSwipeRight: () => void
  threshold?: number
  enabled?: boolean
}

export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50, enabled = true }: UseSwipeProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    const handleTouchStart = (e: TouchEvent) => {
      setTouchEnd(null)
      setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return

      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > threshold
      const isRightSwipe = distance < -threshold

      if (isLeftSwipe) {
        onSwipeLeft()
      } else if (isRightSwipe) {
        onSwipeRight()
      }
    }

    document.addEventListener("touchstart", handleTouchStart as any)
    document.addEventListener("touchmove", handleTouchMove as any)
    document.addEventListener("touchend", handleTouchEnd as any)

    return () => {
      document.removeEventListener("touchstart", handleTouchStart as any)
      document.removeEventListener("touchmove", handleTouchMove as any)
      document.removeEventListener("touchend", handleTouchEnd as any)
    }
  }, [onSwipeLeft, onSwipeRight, touchStart, touchEnd, threshold, enabled])
}
