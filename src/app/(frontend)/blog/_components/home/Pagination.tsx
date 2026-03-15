import Link from 'next/link'

export function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  return (
    <div className="flex justify-center gap-3 mt-14">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1

        return (
          <Link
            key={page}
            href={`/?page=${page}`}
            className={`px-4 py-2 rounded-lg text-sm border transition ${
              currentPage === page
                ? 'bg-violet-600 border-violet-600'
                : 'border-white/10 hover:bg-white/10'
            }`}
          >
            {page}
          </Link>
        )
      })}
    </div>
  )
}