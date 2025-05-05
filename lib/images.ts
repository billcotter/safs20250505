// This file manages all images for the website

// Define image metadata for better organization and accessibility
export interface ImageMeta {
  src: string
  alt: string
  width?: number
  height?: number
  category: string[]
  description?: string
}

// Film images with detailed metadata
export const siteImages: ImageMeta[] = [
  {
    src: "/images/film1.jpg",
    alt: "Black and white film still with profile portrait and car",
    category: ["drama", "noir", "featured"],
    description: "Dramatic black and white composition showing urban cinema aesthetics",
  },
  {
    src: "/images/film2.jpg",
    alt: "Film set with photographer and subject",
    category: ["behind-the-scenes", "production", "portrait"],
    description: "Behind the scenes of classic cinema showing the filmmaking process",
  },
  {
    src: "/images/film3.jpg",
    alt: "Classic film scene with couple and small dog",
    category: ["classic", "romance", "comedy"],
    description: "Charming scene from golden age cinema featuring a couple and their dog",
  },
  {
    src: "/images/film4.jpg",
    alt: "Night scene outside diner with 'Open All Nite' sign",
    category: ["noir", "urban", "night"],
    description: "Atmospheric night scene capturing the essence of film noir",
  },
  {
    src: "/images/film5.jpg",
    alt: "Man and woman in conversation at table",
    category: ["drama", "dialogue", "classic"],
    description: "Intimate dialogue scene showcasing classic film composition",
  },
  // New classic film images
  {
    src: "/images/classic-film-smoking.jpg",
    alt: "Man in dark clothing lighting a cigarette",
    category: ["noir", "drama", "portrait"],
    description: "Atmospheric portrait of a man with cigarette, exemplifying film noir aesthetics",
  },
  {
    src: "/images/classic-film-conversation.jpg",
    alt: "Two men in intense conversation",
    category: ["drama", "dialogue", "noir"],
    description:
      "Dramatic scene showing two men in a tense conversation, highlighting classic cinema's focus on character dynamics",
  },
  {
    src: "/images/classic-film-investigation.jpg",
    alt: "Two men examining an object with intensity",
    category: ["thriller", "mystery", "noir"],
    description: "Suspenseful moment from a mystery film showing characters examining evidence",
  },
  {
    src: "/images/classic-film-bartender.jpg",
    alt: "Man in vest and bow tie behind bar counter",
    category: ["noir", "drama", "portrait"],
    description: "Character portrait of a bartender in classic film attire, set in a vintage establishment",
  },
  {
    src: "/images/classic-film-couple.jpg",
    alt: "Man and woman in formal attire in intimate moment",
    category: ["romance", "classic", "drama"],
    description: "Romantic scene between elegantly dressed couple showcasing golden age Hollywood chemistry",
  },
  {
    src: "/images/classic-film-table-scene.jpg",
    alt: "Two men in serious conversation at a table",
    category: ["drama", "noir", "dialogue"],
    description:
      "Tense table scene between two characters, demonstrating classic film's emphasis on dialogue and performance",
  },
  {
    src: "/images/classic-film-woman-bars.jpg",
    alt: "Woman looking through bars with dramatic lighting",
    category: ["noir", "drama", "thriller"],
    description: "Striking image of a woman framed by bars, creating visual metaphor common in film noir",
  },
  {
    src: "/images/classic-film-san-francisco.jpg",
    alt: "Street scene with train and San Francisco city limits sign",
    category: ["urban", "location", "historical"],
    description:
      "Evocative street scene featuring a train and San Francisco city limits sign, capturing mid-century American urban landscape",
  },
]

// Get a random image from the collection
export function getRandomImage(): ImageMeta {
  const randomIndex = Math.floor(Math.random() * siteImages.length)
  return siteImages[randomIndex]
}

// Get a random image from a specific category
export function getRandomImageByCategory(category: string): ImageMeta {
  const filteredImages = siteImages.filter((img) => img.category.includes(category))

  // If no images match the category, return any random image
  if (filteredImages.length === 0) return getRandomImage()

  const randomIndex = Math.floor(Math.random() * filteredImages.length)
  return filteredImages[randomIndex]
}

// Get multiple random images (without duplicates if possible)
export function getMultipleRandomImages(count: number): ImageMeta[] {
  // Shuffle the array
  const shuffled = [...siteImages].sort(() => 0.5 - Math.random())

  // If we need more images than we have, we'll have duplicates
  if (count <= siteImages.length) {
    return shuffled.slice(0, count)
  } else {
    // Create duplicates to meet the count
    const result: ImageMeta[] = []
    while (result.length < count) {
      result.push(...shuffled.slice(0, Math.min(shuffled.length, count - result.length)))
    }
    return result
  }
}
