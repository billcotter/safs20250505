"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { LoadingSpinner } from "@/components/loading-spinner"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  priority?: boolean
  className?: string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = "100vw",
  priority = false,
  className = "",
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Calculate aspect ratio for non-fill images to prevent layout shift
  const aspectRatio = width && height ? width / height : undefined

  // Ensure src is not undefined or empty
  const imageSrc = src || "/placeholder.svg"

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={!fill && aspectRatio ? { aspectRatio: String(aspectRatio) } : {}}
    >
      {/* Show loading spinner while image loads */}
      {isLoading && isMounted && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/30 backdrop-blur-sm">
          <LoadingSpinner size="sm" />
        </div>
      )}

      {/* Show error state if image fails to load */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-2"
          >
            <path d="M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
            <path d="M2 9.5v5a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5h-15A2.5 2.5 0 0 0 2 9.5z"></path>
            <path d="m2 9.5 7.5-7.5 5 5 7.5-7.5"></path>
          </svg>
          <span className="text-xs">Image not available</span>
        </div>
      )}

      {/* The actual image */}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        fill={fill}
        width={!fill ? width || 800 : undefined}
        height={!fill ? height || 600 : undefined}
        sizes={sizes}
        priority={priority}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${
          objectFit === "cover" ? "object-cover" : objectFit === "contain" ? "object-contain" : ""
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          console.error(`Failed to load image: ${imageSrc}`)
          setIsLoading(false)
          setError(true)
        }}
      />
    </div>
  )
}
