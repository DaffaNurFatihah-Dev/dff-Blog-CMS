import { HeroSection } from './blog/_components/home/HeroSection'
import { BlogSection } from './blog/_components/home/BlogSection'
import { Footer } from './blog/_components/home/Footer'

export default async function HomePage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const page = Number(searchParams.page ?? 1)

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <BlogSection page={page} />
      <Footer />
    </main>
  )
}