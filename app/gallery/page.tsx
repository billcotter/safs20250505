"use client"

import { PageHero } from "@/components/page-hero"
import { siteImages } from "@/lib/images"
import { AdaptiveImage } from "@/components/adaptive-image"
import { ClassicFilmShowcase } from "@/components/classic-film-showcase"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        subtitle="EXPLORE OUR"
        title="Film Collection"
        description="A curated selection of classic cinema stills showcasing the artistry and emotion of black and white film."
        backgroundImage="/images/classic-film-investigation.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Add the ClassicFilmShowcase component at the top */}
        <div className="mb-16">
          <ClassicFilmShowcase />
        </div>

        <h2 className="text-xl font-medium uppercase mb-8">Complete Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteImages.map((image, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-md">
                <AdaptiveImage
                  image={image}
                  className="transition-transform duration-500 group-hover:scale-105"
                  showDescription={false}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-sm font-medium mb-2">{image.alt}</div>
                    <div className="text-xs text-gray-300">{image.description}</div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex flex-wrap gap-1 mt-1">
                  {image.category.map((cat, idx) => (
                    <span key={idx} className="text-xs text-orange-500">
                      #{cat}
                      {idx < image.category.length - 1 ? " " : ""}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
