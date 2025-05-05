// Server component for loading state
export function FilmGridLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="animate-pulse">
          <div className="aspect-[3/4] bg-gray-800 rounded-md mb-3"></div>
          <div className="h-5 bg-gray-800 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-800 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  )
}
