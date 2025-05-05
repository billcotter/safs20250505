import Image from "next/image"
import { Quote } from "lucide-react"

export function MembershipTestimonials() {
  const testimonials = [
    {
      quote:
        "Being a member has completely transformed my film-watching experience. The curated selections and community discussions have deepened my appreciation for cinema.",
      name: "Sarah Johnson",
      title: "Premium Member",
      image: "/diverse-person-portrait.png",
    },
    {
      quote:
        "The exclusive Q&A sessions with directors have been incredible. I've gained insights into filmmaking that I never would have discovered otherwise.",
      name: "Michael Chen",
      title: "Patron Member",
      image: "/diverse-person-portrait.png",
    },
    {
      quote:
        "As a film student, the society's resources and community have been invaluable. The discounted tickets make it possible for me to see more films than I could otherwise afford.",
      name: "Emma Rodriguez",
      title: "Basic Member",
      image: "/diverse-person-portrait.png",
    },
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">What Our Members Say</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Hear from film enthusiasts who have joined our community.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-4 md:p-6 border border-gray-800 relative">
            <Quote className="absolute top-4 right-4 h-6 md:h-8 w-6 md:w-8 text-gray-800 opacity-50" />
            <p className="text-gray-300 mb-5 md:mb-6 italic text-sm md:text-base">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <div className="mr-3 md:mr-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-medium text-sm md:text-base">{testimonial.name}</p>
                <p className="text-xs md:text-sm text-orange-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
