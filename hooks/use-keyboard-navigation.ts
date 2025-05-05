"use client"

import { useEffect } from "react"

interface UseKeyboardNavigationProps {
  onLeftArrow: () => void
  onRightArrow: () => void
  enabled?: boolean
}

export function useKeyboardNavigation({ onLeftArrow, onRightArrow, enabled = true }: UseKeyboardNavigationProps) {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          onLeftArrow()
          break
        case "ArrowRight":
          onRightArrow()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onLeftArrow, onRightArrow, enabled])
}
