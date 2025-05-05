import { PageHero } from "@/components/page-hero"
import { NewsArticle } from "@/components/news-article"
import { NewsSidebar } from "@/components/news-sidebar"
import { Pagination } from "@/components/pagination"

export default function NewsCategoryPage({ params }: { params: { slug: string } }) {
  // Format the category name for display
  const categoryName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero subtitle="CATEGORY" title={categoryName} backgroundImage="/placeholder.svg?key=8glzg" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <NewsArticle
              image="/placeholder.svg?key=nt4yq"
              category={categoryName.toUpperCase()}
              title="Marine corp 2 picks up BAFTA"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat [...]"
            />

            <NewsArticle
              image="/placeholder.svg?key=6mabi"
              category={categoryName.toUpperCase()}
              title="Scope, set to release in summer of 2018"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat [...]"
            />

            <Pagination />
          </div>

          <div className="w-full lg:w-1/3">
            <NewsSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}
