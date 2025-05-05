"use client"

import { useState, useEffect } from "react"

export function useMobileDetection() {
  // Start with null to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [isTablet, setIsTablet] = useState<boolean | null>(null)
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
      setIsDesktop(width >= 1024)
    }

    // Set initial values
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { isMobile, isTablet, isDesktop }
}
