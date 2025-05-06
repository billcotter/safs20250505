import { Suspense } from "react"
import { FilmGrid } from "@/components/film-grid"
import { FilmGridLoading } from "@/components/film-grid-loading"
import { FilmSchedule } from "@/components/film-schedule"
import { ComingSoon } from "@/components/coming-soon"
import { HeroSlider } from "@/components/hero-slider"
import { LoadingSpinner } from "@/components/loading-spinner"
import { ErrorBoundary } from "@/components/error-boundary"

// Define the slides for our hero slider
const heroSlides = [
  {
    image: "/images/film1.jpg",
    title: "Behind Enemy Lines",
    subtitle: "A Thrilling Adventure",
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
    categories: ["Action", "Adventure", "Sci-Fi"],
    slug: "behind-enemy-lines",
  },
  {
    image: "/images/classic-film-couple.jpg",
    title: "Midnight Rendezvous",
    subtitle: "A Tale of Romance",
    description:
      "A chance encounter leads to an unforgettable evening as two strangers navigate the complexities of love and fate in this captivating classic from the golden age of cinema.",
    categories: ["Romance", "Drama", "Classic"],
    slug: "midnight-rendezvous",
  },
  {
    image: "/images/classic-film-investigation.jpg",
    title: "The Final Clue",
    subtitle: "Mystery Awaits",
    description:
      "When a routine investigation takes an unexpected turn, two detectives must race against time to solve the case before the trail goes cold in this gripping thriller.",
    categories: ["Mystery", "Thriller", "Noir"],
    slug: "the-final-clue",
  },
  {
    image: "/images/classic-film-san-francisco.jpg",
    title: "City Limits",
    subtitle: "A Journey Through Time",
    description:
      "Experience the bustling streets of mid-century San Francisco in this atmospheric documentary that captures a pivotal moment in the city's rich history.",
    categories: ["Documentary", "Historical", "Urban"],
    slug: "city-limits",
  },
]

export default async function Home() {
  return (
    <>
      <ErrorBoundary
        fallback={
          <div className="h-[70vh] flex items-center justify-center bg-gray-900">
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold mb-4">Unable to load hero slider</h2>
              <p className="text-gray-400">Please try refreshing the page</p>
            </div>
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="h-[70vh] flex items-center justify-center bg-black">
              <LoadingSpinner size="lg" />
            </div>
          }
        >
          <HeroSlider slides={heroSlides} />
        </Suspense>
      </ErrorBoundary>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium">SEE ALL</h2>
          <a href="#" className="text-orange-500 hover:text-orange-400 text-sm">
            View more
          </a>
        </div>

        <ErrorBoundary>
          <Suspense fallback={<FilmGridLoading />}>
            <FilmGrid />
          </Suspense>
        </ErrorBoundary>

        <div className="mt-16">
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="h-64 flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              }
            >
              <FilmSchedule />
            </Suspense>
          </ErrorBoundary>
        </div>

        <div className="mt-16">
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="h-64 flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              }
            >
              <ComingSoon />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}
