'use client';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NewsSidebar() {
  const categories = [
    { name: "Awards", slug: "awards" },
    { name: "Coming soon", slug: "coming-soon" },
    { name: "New releases", slug: "new-releases" },
    { name: "What's hot", slug: "whats-hot" },
  ]

  const archives = [{ name: "November 2017", slug: "november-2017" }]

  const tags = [
    { name: "TAG 1", slug: "tag-1" },
    { name: "TAG 2", slug: "tag-2" },
    { name: "TAG 3", slug: "tag-3" },
    { name: "TAG 4", slug: "tag-4" },
    { name: "TAG 5", slug: "tag-5" },
    { name: "TAG 6", slug: "tag-6" },
  ]

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Input type="search" placeholder="Search..." className="bg-white border-gray-200 pr-10 text-black h-9" />
          <Button size="sm" variant="ghost" className="absolute right-0 top-0 h-full px-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-orange-500 uppercase text-sm font-medium mb-4">Categories</h3>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/news/category/${category.slug}`}
                className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Archives */}
      <div>
        <h3 className="text-orange-500 uppercase text-sm font-medium mb-4">Archives</h3>
        <ul className="space-y-1">
          {archives.map((archive) => (
            <li key={archive.slug}>
              <Link
                href={`/news/archive/${archive.slug}`}
                className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
              >
                {archive.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-orange-500 uppercase text-sm font-medium mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.slug}
              href={`/news/tag/${tag.slug}`}
              className="bg-gray-800 hover:bg-gray-700 transition-colors px-3 py-1 text-xs rounded-sm"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
