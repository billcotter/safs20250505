"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample film data
const films = [
  { id: 1, title: "The End of Days", times: ["10:30", "13:45", "16:30", "19:15"] },
  { id: 2, title: "Locked In", times: ["11:00", "14:30", "18:00", "21:00"] },
  { id: 3, title: "Daylight", times: ["12:15", "15:45", "19:30"] },
  { id: 4, title: "Behind Enemy Lines", times: ["10:00", "13:30", "17:00", "20:30"] },
]

// Sample dates (next 7 days)
const getDates = () => {
  const dates = []
  const today = new Date()

  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    dates.push({
      date: date,
      formatted: date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
    })
  }

  return dates
}

export function TicketSelection() {
  const [selectedFilm, setSelectedFilm] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<number>(0) // Default to today
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const dates = getDates()

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Select Your Screening</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Film Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Select Film</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {films.map((film) => (
              <Button
                key={film.id}
                variant="outline"
                className={cn(
                  "justify-start h-auto py-3 px-4 border-gray-700 hover:border-orange-500",
                  selectedFilm === film.id && "border-orange-500 bg-gray-800",
                )}
                onClick={() => {
                  setSelectedFilm(film.id)
                  setSelectedTime(null) // Reset time when film changes
                }}
              >
                {film.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Select Date</label>
          <div className="flex overflow-x-auto no-scrollbar space-x-2 pb-2">
            {dates.map((date, index) => (
              <Button
                key={index}
                variant="outline"
                className={cn(
                  "flex-shrink-0 border-gray-700",
                  selectedDate === index ? "border-orange-500 bg-gray-800" : "hover:border-orange-500",
                )}
                onClick={() => setSelectedDate(index)}
              >
                <Calendar className="mr-2 h-4 w-4 text-orange-500" />
                {date.formatted}
              </Button>
            ))}
          </div>
        </div>

        {/* Time Selection - Only show if a film is selected */}
        {selectedFilm && (
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Select Time</label>
            <div className="flex flex-wrap gap-2">
              {films
                .find((f) => f.id === selectedFilm)
                ?.times.map((time, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={cn(
                      "border-gray-700",
                      selectedTime === time ? "border-orange-500 bg-gray-800" : "hover:border-orange-500",
                    )}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
            </div>
          </div>
        )}

        {/* Ticket Quantity Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Adult Tickets</label>
            <Select defaultValue="1">
              <SelectTrigger className="bg-gray-800 border-gray-700">
                <SelectValue placeholder="Select quantity" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i} value={String(i + 1)}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Child Tickets</label>
            <Select defaultValue="0">
              <SelectTrigger className="bg-gray-800 border-gray-700">
                <SelectValue placeholder="Select quantity" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i} value={String(i)}>
                    {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Senior Tickets</label>
            <Select defaultValue="0">
              <SelectTrigger className="bg-gray-800 border-gray-700">
                <SelectValue placeholder="Select quantity" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i} value={String(i)}>
                    {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Student Tickets</label>
            <Select defaultValue="0">
              <SelectTrigger className="bg-gray-800 border-gray-700">
                <SelectValue placeholder="Select quantity" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i} value={String(i)}>
                    {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
