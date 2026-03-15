import { getPublishedArticles } from '@/collections/Articles/fetchers'
import { BlogCard } from './BlogCard'
import { Pagination } from './Pagination'

const PER_PAGE = 6

export async function BlogSection({ page }: { page: number }) {
  const articles = await getPublishedArticles()

  const totalPages = Math.ceil(articles.length / PER_PAGE)
  const start = (page - 1) * PER_PAGE
  const paginated = articles.slice(start, start + PER_PAGE)

  return (
    <section id="articles" className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10">Latest Articles</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginated.map((article: any) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} />
    </section>
  )
}