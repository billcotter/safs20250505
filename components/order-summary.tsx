"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Ticket, Tag } from "lucide-react"

export function OrderSummary() {
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "filmfan") {
      setPromoApplied(true)
    } else {
      alert("Invalid promo code")
    }
  }

  // Sample order details
  const orderDetails = {
    items: [
      { name: "Adult Ticket", quantity: 1, price: 12.5 },
      { name: "Booking Fee", quantity: 1, price: 1.5 },
    ],
    subtotal: 14.0,
    discount: promoApplied ? 2.0 : 0,
    total: promoApplied ? 12.0 : 14.0,
  }

  return (
    <Card className="bg-gray-900 border-gray-800 sticky top-20">
      <CardHeader>
        <CardTitle className="text-xl font-medium flex items-center">
          <Ticket className="mr-2 h-5 w-5 text-orange-500" />
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Order Items */}
        <div className="space-y-2">
          {orderDetails.items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-gray-300">
                {item.quantity} × {item.name}
              </span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <Separator className="bg-gray-800" />

        {/* Subtotal */}
        <div className="flex justify-between">
          <span className="text-gray-300">Subtotal</span>
          <span>${orderDetails.subtotal.toFixed(2)}</span>
        </div>

        {/* Discount (if applied) */}
        {promoApplied && (
          <div className="flex justify-between text-orange-500">
            <span>Discount (FILMFAN)</span>
            <span>-${orderDetails.discount.toFixed(2)}</span>
          </div>
        )}

        {/* Promo Code Input */}
        <div className="pt-2">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            <div className="flex items-center">
              <Tag className="mr-2 h-4 w-4 text-orange-500" />
              Promo Code
            </div>
          </label>
          <div className="flex space-x-2">
            <Input
              placeholder="Enter code"
              className="bg-gray-800 border-gray-700 focus:border-orange-500"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              disabled={promoApplied}
            />
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              onClick={handleApplyPromo}
              disabled={promoApplied || !promoCode}
            >
              Apply
            </Button>
          </div>
          {promoApplied && <p className="text-xs text-orange-500 mt-1">Promo code applied successfully!</p>}
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-800 pt-4">
        <div className="w-full">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Total</span>
            <span className="text-xl font-bold text-orange-500">${orderDetails.total.toFixed(2)}</span>
          </div>

          <p className="text-xs text-gray-400">
            Tickets will be sent to your email after purchase. Please arrive 15 minutes before showtime.
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
