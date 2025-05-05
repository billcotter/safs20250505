"use client"

import { useEffect, useState } from "react"

export function HydrationDebug() {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 9999,
        padding: "4px 8px",
        fontSize: "12px",
        backgroundColor: isHydrated ? "rgba(0, 128, 0, 0.7)" : "rgba(255, 0, 0, 0.7)",
        color: "white",
        borderTopLeftRadius: "4px",
      }}
    >
      {isHydrated ? "Hydrated ✓" : "Not Hydrated ✗"}
    </div>
  )
}
