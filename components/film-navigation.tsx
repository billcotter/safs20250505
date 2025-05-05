"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface FilmNavigationProps {
  sections: {
    id: string
    label: string
  }[]
}

export function FilmNavigation({ sections }: FilmNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isSticky, setIsSticky] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Initialize active section after mounting
    setActiveSection(sections[0]?.id || "")

    const handleScroll = () => {
      // Make navigation sticky after scrolling past the hero section
      setIsSticky(window.scrollY > window.innerHeight * 0.7)

      // Update active section based on scroll position
      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((item) => item.element)

      // Find the section that is currently in view
      for (const section of sectionElements) {
        if (!section.element) continue

        const rect = section.element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  if (!isMounted) return null

  return (
    <div className={`container mx-auto px-4 ${isSticky ? 'fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 py-4' : ''}`}>
      <nav className="flex items-center justify-center space-x-8">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={`text-sm font-medium transition-colors ${
              activeSection === section.id
                ? 'text-orange-500'
                : 'text-gray-400 hover:text-orange-500'
            }`}
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById(section.id)
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
