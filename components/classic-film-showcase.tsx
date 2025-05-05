"use client"

import { useState, useEffect } from "react"
import { getMultipleRandomImages, getRandomImageByCategory } from "@/lib/images"
import { AdaptiveImage } from "@/components/adaptive-image"
import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"

export function ClassicFilmShowcase() {
  const [images, setImages] = useState(() => {
    const imgs = getMultipleRandomImages(4)
    console.log("Initial images:", imgs)
    return imgs
  })

  const [featuredImage, setFeaturedImage] = useState(() => {
    const img = getRandomImageByCategory("noir") || getRandomImageByCategory("classic")
    console.log("Initial featured image:", img)
    return img
  })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    console.log("Component mounted, images:", images)
    console.log("Featured image:", featuredImage)
  }, [images, featuredImage])

  const handleShuffle = () => {
    const newImages = getMultipleRandomImages(4)
    const newFeatured = getRandomImageByCategory("noir") || getRandomImageByCategory("classic")
    console.log("Shuffled images:", newImages)
    console.log("New featured image:", newFeatured)
    setImages(newImages)
    setFeaturedImage(newFeatured)
  }

  if (!isMounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium uppercase">Classic Film Collection</h2>
        <Button onClick={handleShuffle} variant="outline" size="sm" className="border-gray-700 hover:border-orange-500">
          <Shuffle className="h-4 w-4 mr-2" /> Shuffle
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured image */}
        <div className="aspect-[4/3] relative">
          <AdaptiveImage
            image={
              featuredImage ||
              (images && images.length > 0
                ? images[0]
                : {
                    src: "/placeholder.svg?key=adpdi",
                    alt: "Classic film",
                    category: ["classic"],
                  })
            }
            className="h-full rounded-md"
            showDescription={true}
          />
        </div>

        {/* Grid of smaller images */}
        <div className="grid grid-cols-2 gap-4">
          {images &&
            images.slice(0, 4).map((image, index) => (
              <div key={index} className="aspect-square relative">
                <AdaptiveImage
                  image={
                    image || {
                      src: `/placeholder.svg?height=400&width=400&query=film+${index}`,
                      alt: `Film image ${index}`,
                      category: ["classic"],
                    }
                  }
                  className="h-full rounded-md"
                  showDescription={false}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
