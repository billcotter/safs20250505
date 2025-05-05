import Link from "next/link"

export function Pagination() {
  return (
    <div className="flex items-center space-x-4 my-12">
      <Link
        href="#"
        className="w-8 h-8 flex items-center justify-center rounded-full border border-orange-500 text-orange-500"
      >
        1
      </Link>
      <Link
        href="#"
        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-orange-500 hover:text-orange-500 transition-colors"
      >
        2
      </Link>
      <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
        Next page
      </Link>
    </div>
  )
}
