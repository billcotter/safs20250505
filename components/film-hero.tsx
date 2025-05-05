"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { getRandomImageByCategory } from "@/lib/images"
import { AdaptiveImage } from "@/components/adaptive-image"
import Link from "next/link"

export function FilmHero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Get a featured or noir image for the hero
  const heroImage = getRandomImageByCategory("noir") || getRandomImageByCategory("featured")

  // Create a slug from the title
  const title = "Behind Enemy Lines"
  const slug = "behind-enemy-lines"

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <AdaptiveImage image={heroImage} priority={true} className="h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="container relative mx-auto flex h-full flex-col items-start justify-end px-4 pb-16">
        <div className="flex gap-2 mb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-orange-500">Action</span>
          <span className="text-xs font-medium uppercase tracking-wider text-orange-500">Adventure</span>
          <span className="text-xs font-medium uppercase tracking-wider text-orange-500">Sci-Fi</span>
        </div>
        {/* Fixed nested links - using a single Link component */}
        <h1 className="mb-4 text-4xl font-bold uppercase leading-tight md:text-5xl">
          <Link href={`/films/${slug}`} className="hover:text-orange-500 transition-colors">
            {title}
          </Link>
        </h1>
        <p className="mb-6 max-w-2xl text-gray-400">
          Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
          littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta
          decima et quinta decima.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tickets">
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-6">Get Tickets</Button>
          </Link>
          <Link href={`/films/${slug}`}>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-6">
              More Info
            </Button>
          </Link>
        </div>

        {/* Pagination dots - only show after mounting */}
        {isMounted && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="h-2 w-2 rounded-full bg-gray-600"></span>
            <span className="h-2 w-2 rounded-full bg-gray-600"></span>
          </div>
        )}
      </div>
    </div>
  )
}
