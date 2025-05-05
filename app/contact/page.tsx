import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        subtitle="HAVE ANY QUESTIONS?"
        title="Please contact us"
        description="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
        backgroundImage="/images/film4.jpg"
      />

      {/* Rest of the component remains unchanged */}
      <div className="container mx-auto px-4 py-12">
        {/* Content remains the same */}
        {/* Map */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.2186254285396!2d-81.31316522345247!3d29.894268628586386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6db2d953bdae5%3A0x8f497e7c099c33a5!2sSt.%20Augustine%2C%20FL!5e0!3m2!1sen!2sus!4v1714763125123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Improve the ContactPage component for better responsiveness */}

        {/* Update the grid to stack on mobile and tablet */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-orange-500 uppercase text-sm font-medium mb-6 md:mb-8 border-b border-orange-500 pb-2 inline-block">
              Send a message
            </h2>

            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 uppercase text-gray-400">
                  Name <span className="text-orange-500">*</span>
                </label>
                <Input id="name" required className="bg-transparent border-gray-700 focus:border-orange-500" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 uppercase text-gray-400">
                  Email <span className="text-orange-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-transparent border-gray-700 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 uppercase text-gray-400">
                  Message <span className="text-orange-500">*</span>
                </label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  className="bg-transparent border-gray-700 focus:border-orange-500"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="bg-transparent hover:bg-orange-500 text-orange-500 hover:text-white border border-orange-500 rounded-full px-6 md:px-8 py-2 text-sm uppercase transition-colors"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-8 lg:mt-0">
            <div className="flex items-start mb-6 md:mb-8">
              <div className="bg-transparent border border-gray-700 rounded-full p-3 md:p-4 mr-4">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Address</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  123 Cinema Street
                  <br />
                  St. Augustine, FL 32084
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-transparent border border-gray-700 rounded-full p-3 md:p-4 mr-4">
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-gray-400 text-sm md:text-base">info@staugustinefilmsociety.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
