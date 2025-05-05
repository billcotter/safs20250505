// This is now a server component
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <div className="mt-16 rounded-xl bg-gray-900 p-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold">Join Our Film Community</h2>
        <p className="mt-2 text-gray-400">
          Subscribe to our newsletter for exclusive film recommendations, event invitations, and member-only content.
        </p>
        <form action="/api/newsletter" className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
          <Input type="email" name="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700" />
          <Button type="submit" className="bg-red-600 hover:bg-red-700">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  )
}
