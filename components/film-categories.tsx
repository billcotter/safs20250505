import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", label: "All", isActive: true },
  { id: "action", label: "Action" },
  { id: "adventure", label: "Adventure" },
  { id: "animation", label: "Animation" },
  { id: "comedy", label: "Comedy" },
  { id: "crime", label: "Crime" },
  { id: "documentary", label: "Documentary" },
  { id: "drama", label: "Drama" },
  { id: "family", label: "Family" },
  { id: "fantasy", label: "Fantasy" },
  { id: "horror", label: "Horror" },
  { id: "sci-fi", label: "Sci-Fi" },
  { id: "thriller", label: "Thriller" },
]

export function FilmCategories() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-medium mb-4">Filter by Category</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={category.isActive ? "default" : "outline"}
            className={
              category.isActive
                ? "bg-orange-500 hover:bg-orange-600"
                : "border-gray-700 text-gray-300 hover:bg-gray-800"
            }
            size="sm"
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
