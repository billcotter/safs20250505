"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function MembershipTiers() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually")

  const tiers = [
    {
      name: "Basic",
      description: "Perfect for film enthusiasts who want to support our society",
      monthlyPrice: 5,
      annualPrice: 50,
      features: [
        "Access to monthly screenings",
        "Digital newsletter",
        "Member-only online content",
        "Discounted tickets for guests",
      ],
      notIncluded: ["Priority seating", "Special events access", "Behind-the-scenes tours", "Director Q&A sessions"],
      buttonText: "Join Basic",
      popular: false,
    },
    {
      name: "Premium",
      description: "Our most popular tier with exclusive benefits and priority access",
      monthlyPrice: 12,
      annualPrice: 120,
      features: [
        "Access to monthly screenings",
        "Digital newsletter",
        "Member-only online content",
        "Discounted tickets for guests",
        "Priority seating",
        "Special events access",
        "One free guest pass per quarter",
      ],
      notIncluded: ["Behind-the-scenes tours", "Director Q&A sessions"],
      buttonText: "Join Premium",
      popular: true,
    },
    {
      name: "Patron",
      description: "For dedicated cinephiles who want the complete film society experience",
      monthlyPrice: 25,
      annualPrice: 250,
      features: [
        "Access to monthly screenings",
        "Digital newsletter",
        "Member-only online content",
        "Discounted tickets for guests",
        "Priority seating",
        "Special events access",
        "Behind-the-scenes tours",
        "Director Q&A sessions",
        "Name recognition in program",
        "Two free guest passes per quarter",
      ],
      notIncluded: [],
      buttonText: "Become a Patron",
      popular: false,
    },
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Choose Your Membership</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join our community of film lovers and enjoy exclusive benefits, special events, and more. Select the
          membership tier that best suits your passion for cinema.
        </p>

        <div className="mt-8 inline-flex items-center p-1 bg-gray-900 rounded-full">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={cn(
              "px-4 py-2 text-sm rounded-full transition-colors",
              billingCycle === "monthly" ? "bg-orange-500 text-white" : "text-gray-400 hover:text-white",
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annually")}
            className={cn(
              "px-4 py-2 text-sm rounded-full transition-colors",
              billingCycle === "annually" ? "bg-orange-500 text-white" : "text-gray-400 hover:text-white",
            )}
          >
            Annually <span className="text-xs opacity-75">(Save 15%)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "relative rounded-lg border p-4 md:p-6",
              tier.popular ? "border-orange-500 bg-gray-900" : "border-gray-800 bg-gray-950",
            )}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}

            <h3 className="text-lg md:text-xl font-bold mb-2">{tier.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

            <div className="mb-5 md:mb-6">
              <div className="flex items-end">
                <span className="text-2xl md:text-3xl font-bold">
                  ${billingCycle === "monthly" ? tier.monthlyPrice : tier.annualPrice}
                </span>
                <span className="text-gray-400 ml-2">/{billingCycle === "monthly" ? "month" : "year"}</span>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {tier.features.map((feature) => (
                <div key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}

              {tier.notIncluded.map((feature) => (
                <div key={feature} className="flex items-start text-gray-500">
                  <X className="h-5 w-5 mr-2 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              className={cn(
                "w-full rounded-full",
                tier.popular ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-800 hover:bg-gray-700",
              )}
            >
              {tier.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
