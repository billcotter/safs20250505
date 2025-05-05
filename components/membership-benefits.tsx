import { Film, Ticket, Users, Calendar, Star, Award, MessageSquare, Headphones } from "lucide-react"

export function MembershipBenefits() {
  const benefits = [
    {
      icon: <Film className="h-6 w-6 text-orange-500" />,
      title: "Curated Film Screenings",
      description: "Enjoy carefully selected films from around the world, from classics to contemporary masterpieces.",
    },
    {
      icon: <Ticket className="h-6 w-6 text-orange-500" />,
      title: "Discounted Tickets",
      description: "Members receive special pricing on all regular screenings and events throughout the year.",
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Community Events",
      description: "Connect with fellow film enthusiasts at member-only social gatherings and discussions.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-orange-500" />,
      title: "Early Access",
      description: "Get first access to tickets for special screenings, festivals, and limited-seating events.",
    },
    {
      icon: <Star className="h-6 w-6 text-orange-500" />,
      title: "Exclusive Content",
      description: "Access member-only content including interviews, articles, and film analysis.",
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: "Festival Passes",
      description: "Special rates on festival passes and priority access to our annual film festival.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-orange-500" />,
      title: "Director Q&As",
      description: "Participate in exclusive Q&A sessions with directors and film industry professionals.",
    },
    {
      icon: <Headphones className="h-6 w-6 text-orange-500" />,
      title: "Film Podcast",
      description: "Access to our member-only podcast featuring in-depth discussions and analysis.",
    },
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Membership Benefits</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our members enjoy a wide range of benefits designed to enhance their appreciation and enjoyment of cinema.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-4 md:p-6 border border-gray-800">
            <div className="mb-3 md:mb-4">{benefit.icon}</div>
            <h3 className="text-base md:text-lg font-medium mb-2">{benefit.title}</h3>
            <p className="text-gray-400 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
