"use client"

import Image from "next/image"
import { useState } from "react"

interface HeroImageProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

export function HeroImage({ src, alt, priority = false, className = "" }: HeroImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority={priority}
      className={className}
      onError={() => {
        console.error(`Failed to load image: ${src}`)
        setImgSrc("/dramatic-film-scene.png")
      }}
    />
  )
} 