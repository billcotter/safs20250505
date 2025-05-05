import { PageHero } from "@/components/page-hero"

export default function TicketsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        subtitle="SECURE YOUR SEATS"
        title="Purchase Tickets"
        description="Select your tickets for upcoming screenings at St. Augustine Film Society. Members receive special discounts on all purchases."
        backgroundImage="/images/film4.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Ticket Selection */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6">Select Your Screening</h2>

              <div className="space-y-6">
                {/* Film Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Select Film</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["The End of Days", "Locked In", "Daylight", "Behind Enemy Lines"].map((film, index) => (
                      <button
                        key={index}
                        className="justify-start h-auto py-3 px-4 border border-gray-700 hover:border-orange-500 rounded-md text-left"
                      >
                        {film}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Select Date</label>
                  <div className="flex overflow-x-auto space-x-2 pb-2">
                    {["Today", "Tomorrow", "Wed, May 5", "Thu, May 6", "Fri, May 7"].map((date, index) => (
                      <button
                        key={index}
                        className="flex-shrink-0 border border-gray-700 hover:border-orange-500 rounded-md px-4 py-2"
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Select Time</label>
                  <div className="flex flex-wrap gap-2">
                    {["10:30", "13:45", "16:30", "19:15"].map((time, index) => (
                      <button
                        key={index}
                        className="border border-gray-700 hover:border-orange-500 rounded-md px-3 py-1 text-sm"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ticket Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Adult Tickets</label>
                    <select className="w-full bg-gray-800 border-gray-700 rounded-md p-2">
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Child Tickets</label>
                    <select className="w-full bg-gray-800 border-gray-700 rounded-md p-2">
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6">Checkout</h2>

              <form className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Contact Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                        Full Name
                      </label>
                      <input
                        id="name"
                        placeholder="John Doe"
                        className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:border-orange-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Information</h3>

                  <div className="space-y-2">
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-400">
                      Card Number
                    </label>
                    <input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-400">
                        Expiry Date
                      </label>
                      <input
                        id="expiry"
                        placeholder="MM/YY"
                        className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:border-orange-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-400">
                        CVC
                      </label>
                      <input
                        id="cvc"
                        placeholder="123"
                        className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full"
                >
                  Complete Purchase
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-20">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>

              <div className="space-y-4">
                {/* Order Items */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">1 × Adult Ticket</span>
                    <span>$12.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">1 × Booking Fee</span>
                    <span>$1.50</span>
                  </div>
                </div>

                <hr className="border-gray-800" />

                {/* Subtotal */}
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal</span>
                  <span>$14.00</span>
                </div>

                {/* Promo Code Input */}
                <div className="pt-2">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Promo Code</label>
                  <div className="flex space-x-2">
                    <input
                      placeholder="Enter code"
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-md p-2 focus:border-orange-500"
                    />
                    <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-md">
                      Apply
                    </button>
                  </div>
                </div>

                <hr className="border-gray-800" />

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-xl font-bold text-orange-500">$14.00</span>
                </div>

                <p className="text-xs text-gray-400">
                  Tickets will be sent to your email after purchase. Please arrive 15 minutes before showtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
