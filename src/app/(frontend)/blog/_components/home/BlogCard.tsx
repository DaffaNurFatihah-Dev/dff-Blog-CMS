import Image from 'next/image'
import Link from 'next/link'
import { relationIsObject } from '@/lib/payload/helpers/relation-is-object'

export function BlogCard({ article }: { article: any }) {
  if (
    !relationIsObject(article.coverImage) ||
    !relationIsObject(article.author) ||
    !relationIsObject(article.author.avatar)
  )
    return null

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
    >
      <div className="relative h-48 w-full">
        <Image
          src={article.coverImage.url ?? ''}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-lg line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-white/60 line-clamp-2">
          {article.excerpt ?? 'Read more...'}
        </p>

        <div className="flex items-center justify-between text-xs text-white/40 pt-2">
          <span>{article.author.name}</span>
          <span>{article.readTimeInMins ?? 0} min</span>
        </div>
      </div>
    </Link>
  )
}