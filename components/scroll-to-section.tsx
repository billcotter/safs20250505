"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

export function ScrollToSection() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Only run scroll logic after component is mounted
    if (!isMounted) return

    // Get the hash from the URL
    const hash = window.location.hash

    // If there's a hash, scroll to the element with that ID
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        // Use a small timeout to ensure the DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    } else {
      // If no hash but we're navigating to a new page, scroll to top
      window.scrollTo(0, 0)
    }
  }, [pathname, searchParams, isMounted])

  return null
}
