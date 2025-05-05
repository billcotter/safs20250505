"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-800 py-4">
      <button className="flex w-full items-center justify-between text-left" onClick={onClick} aria-expanded={isOpen}>
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-orange-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-orange-500" />
        )}
      </button>
      <div
        className={cn(
          "mt-2 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  )
}

export function MembershipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do I become a member?",
      answer:
        "You can become a member by selecting one of our membership tiers and completing the registration process online. Once your payment is processed, you'll receive a confirmation email with your membership details and instructions on how to access your benefits.",
    },
    {
      question: "Can I upgrade my membership later?",
      answer:
        "Yes, you can upgrade your membership at any time. The price difference will be prorated based on the remaining time in your current membership period. To upgrade, simply log in to your account and select the 'Upgrade Membership' option.",
    },
    {
      question: "Are there any age restrictions for membership?",
      answer:
        "Our standard memberships are available to individuals 18 years and older. We also offer student and youth memberships with valid ID for those between 14-17 years old. Some screenings may have age restrictions based on film ratings.",
    },
    {
      question: "How do I use my member benefits at screenings?",
      answer:
        "You'll receive a digital membership card that you can display on your smartphone or print out. Simply show this card at the box office or when entering events to receive your member benefits and discounts.",
    },
    {
      question: "Can I share my membership with family members?",
      answer:
        "Individual memberships are non-transferable and can only be used by the registered member. However, we offer family memberships that cover two adults and up to two children living at the same address. Patron level members also receive guest passes that can be used for family and friends.",
    },
    {
      question: "What happens when my membership expires?",
      answer:
        "You'll receive email reminders starting 30 days before your membership expires. You can choose to renew manually or set up automatic renewals in your account settings. If your membership lapses, you can reactivate it at any time, but there may be a gap in your benefits.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Find answers to common questions about our membership program.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  )
}
