"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { AuthModal } from "@/components/auth-modal"
import { Button } from "@/components/ui/button"
import { useMobileDetection } from "@/hooks/use-mobile-detection"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const { isMobile } = useMobileDetection()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!isMounted) return

    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen, isMobile, isMounted])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center group">
          <span className="text-base font-bold tracking-wider uppercase text-orange-500 group-hover:text-gray-100 transition-colors">
            St. Augustine Film Society
          </span>
        </Link>

        {/* Mobile menu button - only show after mounting to prevent hydration mismatch */}
        {isMounted && isMobile !== null && (
          <button
            className={isMobile ? "p-2 rounded-md hover:bg-gray-800 transition-colors" : "hidden md:hidden"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        )}

        {/* Desktop navigation - only show after mounting to prevent hydration mismatch */}
        {isMounted && isMobile !== null && (
          <nav className={isMobile ? "hidden" : "flex items-center"}>
            <div className="flex items-center space-x-8 mr-4">
              <Link
                href="/"
                scroll={true}
                className={`text-sm font-medium transition-colors uppercase ${
                  isActive("/") ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                Home
              </Link>
              <Link
                href="/membership"
                scroll={true}
                className={`text-sm font-medium transition-colors uppercase ${
                  isActive("/membership") ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                Membership
              </Link>
              <Link
                href="/whats-on"
                scroll={true}
                className={`text-sm font-medium transition-colors uppercase ${
                  isActive("/whats-on") ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                What's On
              </Link>
              <Link
                href="/news"
                scroll={true}
                className={`text-sm font-medium transition-colors uppercase ${
                  isActive("/news") ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                News
              </Link>
              <Link
                href="/contact"
                scroll={true}
                className={`text-sm font-medium transition-colors uppercase ${
                  isActive("/contact") ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                Contact Us
              </Link>
            </div>
            <AuthModal
              trigger={
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  Sign In
                </Button>
              }
            />
          </nav>
        )}
      </div>

      {/* Mobile menu - with transition */}
      {isMounted && isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 z-50 bg-black border-t border-gray-800 shadow-lg"
          style={{
            animation: "slideInFromTop 300ms ease-out forwards",
          }}
        >
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/"
              scroll={true}
              className={`text-sm font-medium transition-colors uppercase ${
                isActive("/") ? "text-orange-500" : "hover:text-orange-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/membership"
              scroll={true}
              className={`text-sm font-medium transition-colors uppercase ${
                isActive("/membership") ? "text-orange-500" : "hover:text-orange-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            <Link
              href="/whats-on"
              scroll={true}
              className={`text-sm font-medium transition-colors uppercase ${
                isActive("/whats-on") ? "text-orange-500" : "hover:text-orange-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              What's On
            </Link>
            <Link
              href="/news"
              scroll={true}
              className={`text-sm font-medium transition-colors uppercase ${
                isActive("/news") ? "text-orange-500" : "hover:text-orange-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/contact"
              scroll={true}
              className={`text-sm font-medium transition-colors uppercase ${
                isActive("/contact") ? "text-orange-500" : "hover:text-orange-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="pt-2">
              <AuthModal
                trigger={<Button className="w-full bg-orange-500 hover:bg-orange-600">Sign In / Join</Button>}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
