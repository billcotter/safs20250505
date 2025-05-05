"use client"

import { useState, useEffect } from "react"
import type { ImageMeta } from "@/lib/images"
import { OptimizedImage } from "@/components/optimized-image"

interface AdaptiveImageProps {
  image: ImageMeta
  className?: string
  fill?: boolean
  sizes?: string
  priority?: boolean
  showDescription?: boolean
}

export function AdaptiveImage({
  image,
  className = "",
  fill = true,
  sizes = "100vw",
  priority = false,
  showDescription = false,
}: AdaptiveImageProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Ensure we have a valid image source
  const imageSrc = image?.src || "/placeholder.svg?key=c3m88"

  return (
    <div className={`relative ${className}`}>
      <OptimizedImage
        src={imageSrc}
        alt={image?.alt || "Film image"}
        fill={fill}
        width={!fill ? image?.width || 800 : undefined}
        height={!fill ? image?.height || 600 : undefined}
        sizes={sizes}
        priority={priority}
        className="w-full h-full"
      />

      {showDescription && image?.description && isMounted && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-white text-sm">{image.description}</div>
      )}
    </div>
  )
}
