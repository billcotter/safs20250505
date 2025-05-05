"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation"
import { useSwipe } from "@/hooks/use-swipe"
import { HeroImage } from "@/components/hero-image"

interface SlideProps {
  image: string
  title: string
  subtitle: string
  description: string
  categories: string[]
  slug: string
}

interface HeroSliderProps {
  slides: SlideProps[]
  autoSlideInterval?: number
}

export function HeroSlider({ slides, autoSlideInterval = 5000 }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state on client
  useEffect(() => {
    setIsMounted(true)
    console.log("HeroSlider mounted with slides:", slides)
  }, [slides])

  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600) // Match this with the CSS transition duration
  }, [slides.length, isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600) // Match this with the CSS transition duration
  }, [slides.length, isTransitioning])

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return

      setIsTransitioning(true)
      setCurrentSlide(index)

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false)
      }, 600) // Match this with the CSS transition duration
    },
    [currentSlide, isTransitioning],
  )

  // Auto-advance slides - only after mounting
  useEffect(() => {
    if (!isMounted) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [nextSlide, autoSlideInterval, isMounted])

  // Only enable keyboard navigation after mounting
  useKeyboardNavigation({
    onLeftArrow: prevSlide,
    onRightArrow: nextSlide,
    enabled: isMounted,
  })

  // Only enable swipe after mounting
  useSwipe({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    enabled: isMounted,
  })

  return (
    <div
      className="relative min-h-[400px] md:min-h-[500px] lg:h-[70vh] w-full overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured films"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-600 ease-linear",
            isMounted && currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <HeroImage
              src={slide.image || "/placeholder.svg?height=800&width=1200&query=film+scene"}
              alt={`Slide for ${slide.title}`}
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </div>

          {/* Content */}
          <div
            className={cn(
              "container relative mx-auto flex h-full flex-col items-start justify-end px-4 pb-8 md:pb-16",
              isMounted && currentSlide === index ? "animate-fade-in" : "animate-fade-out",
            )}
          >
            <div className="flex flex-wrap gap-2 mb-2">
              {slide.categories.map((category, idx) => (
                <span key={idx} className="text-xs font-medium uppercase tracking-wider text-orange-500">
                  {category}
                </span>
              ))}
            </div>
            {/* Fixed nested links - only one Link component for the title */}
            <h1 className="mb-2 text-2xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
              <Link href={`/films/${slide.slug}`} className="hover:text-orange-500 transition-colors">
                {slide.title}
              </Link>
            </h1>
            <p className="text-sm text-orange-500 uppercase mb-3 md:mb-4">{slide.subtitle}</p>
            <p className="mb-4 md:mb-6 max-w-2xl text-sm md:text-base text-gray-400">{slide.description}</p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link href="/tickets">
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-4 md:px-6 text-sm">
                  Get Tickets
                </Button>
              </Link>
              <Link href={`/films/${slide.slug}`}>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-4 md:px-6 text-sm"
                >
                  More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Only show navigation controls after mounting */}
      {isMounted && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  currentSlide === index ? "bg-white w-4" : "bg-gray-600 hover:bg-gray-400 w-2",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
