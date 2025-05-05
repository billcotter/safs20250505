import { FilmSchedule } from "@/components/film-schedule"
import { ComingSoon } from "@/components/coming-soon"
import { FilmCategories } from "@/components/film-categories"
import { PageHero } from "@/components/page-hero"

export default function WhatsOnPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        subtitle="TAKE A LOOK AT"
        title="What's on this week"
        description="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
        backgroundImage="/images/film2.jpg"
      />

      <div className="container mx-auto px-4 py-8">
        <FilmCategories />

        <div className="mt-12">
          <FilmSchedule />
        </div>

        <div className="mt-16">
          <ComingSoon />
        </div>
      </div>
    </main>
  )
}
