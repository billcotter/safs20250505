import { PageHero } from "@/components/page-hero"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        subtitle="VERY LATEST"
        title="Movie news"
        description="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
        backgroundImage="/images/film3.jpg"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Main Content */}
          <div className="md:w-2/3">
            {/* Article 1 */}
            <article className="mb-12 md:mb-16">
              <div className="mb-4 md:mb-6">
                <Image
                  src="/placeholder.svg?key=nt4yq"
                  alt="Marine corp 2 picks up BAFTA"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-sm object-cover"
                />
              </div>

              <div className="mb-2">
                <div className="text-xs uppercase text-orange-500 font-medium">AWARDS, WHAT'S HOT</div>
              </div>

              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Marine corp 2 picks up BAFTA
                </Link>
              </h2>

              <p className="text-gray-400 mb-3 md:mb-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat [...]
              </p>

              <Link
                href="#"
                className="inline-block border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-4 py-2 text-xs uppercase rounded-sm"
              >
                Read full post
              </Link>
            </article>

            {/* Article 2 */}
            <article className="mb-16">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg?key=6mabi"
                  alt="Scope, set to release in summer of 2018"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-sm object-cover"
                />
              </div>

              <div className="mb-2">
                <div className="text-xs uppercase text-orange-500 font-medium">COMING SOON, NEW RELEASES</div>
              </div>

              <h2 className="text-xl font-medium mb-3">
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Scope, set to release in summer of 2018
                </Link>
              </h2>

              <p className="text-gray-400 mb-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat [...]
              </p>

              <Link
                href="#"
                className="inline-block border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-4 py-2 text-xs uppercase rounded-sm"
              >
                Read full post
              </Link>
            </article>

            {/* Article 3 */}
            <article className="mb-16">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg?key=wez8t"
                  alt="News releases of 2018"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-sm object-cover"
                />
              </div>

              <div className="mb-2">
                <div className="text-xs uppercase text-orange-500 font-medium">COMING SOON, NEW RELEASES</div>
              </div>

              <h2 className="text-xl font-medium mb-3">
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  News releases of 2018
                </Link>
              </h2>

              <p className="text-gray-400 mb-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat [...]
              </p>

              <Link
                href="#"
                className="inline-block border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-4 py-2 text-xs uppercase rounded-sm"
              >
                Read full post
              </Link>
            </article>

            {/* Article 4 */}
            <article className="mb-16">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg?key=z9haj"
                  alt="Inferno date put back"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-sm object-cover"
                />
              </div>

              <div className="mb-2">
                <div className="text-xs uppercase text-orange-500 font-medium">COMING SOON</div>
              </div>

              <h2 className="text-xl font-medium mb-3">
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Inferno date put back
                </Link>
              </h2>

              <p className="text-gray-400 mb-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat [...]
              </p>

              <Link
                href="#"
                className="inline-block border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-4 py-2 text-xs uppercase rounded-sm"
              >
                Read full post
              </Link>
            </article>

            {/* Pagination */}
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
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            {/* Search */}
            <div className="mb-6 md:mb-8">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="bg-white border-gray-200 pr-10 text-black h-9"
                />
                <Button size="sm" variant="ghost" className="absolute right-0 top-0 h-full px-3 text-orange-500">
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
            <div className="mb-8">
              <h3 className="text-orange-500 uppercase text-sm font-medium mb-4">Categories</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                    Awards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                    Coming soon
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                    New releases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                    What's hot
                  </Link>
                </li>
              </ul>
            </div>

            {/* Archives */}
            <div className="mb-8">
              <h3 className="text-orange-500 uppercase text-sm font-medium mb-4">Archives</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                    November 2017
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-orange-500 uppercase text-sm font-medium mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors px-3 py-1 text-xs rounded-sm">
                  TAG 1
                </Link>
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors px-3 py-1 text-xs rounded-sm">
                  TAG 2
                </Link>
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors px-3 py-1 text-xs rounded-sm">
                  TAG 3
                </Link>
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors px-3 py-1 text-xs rounded-sm">
                  TAG 4
                </Link>
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors px-3 py-1 text-xs rounded-sm">
                  TAG 5
                </Link>
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors px-3 py-1 text-xs rounded-sm">
                  TAG 6
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
