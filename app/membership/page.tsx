import { PageHero } from "@/components/page-hero"
import { MembershipTiers } from "@/components/membership-tiers"
import { MembershipBenefits } from "@/components/membership-benefits"
import { MembershipFAQ } from "@/components/membership-faq"
import { MembershipTestimonials } from "@/components/membership-testimonials"
import { Newsletter } from "@/components/newsletter"

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        subtitle="JOIN OUR COMMUNITY"
        title="Membership"
        description="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
        backgroundImage="/images/film5.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        <MembershipTiers />

        <div className="mt-24">
          <MembershipBenefits />
        </div>

        <div className="mt-24">
          <MembershipTestimonials />
        </div>

        <div className="mt-24">
          <MembershipFAQ />
        </div>

        <div className="mt-24">
          <Newsletter />
        </div>
      </div>
    </main>
  )
}
