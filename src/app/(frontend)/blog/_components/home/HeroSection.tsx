import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative py-32">
      {/* gradient glow background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-zinc-950 via-black to-black" />

      <div className="max-w-5xl mx-auto text-center px-6">
        <p className="text-violet-400 text-sm mb-4 tracking-widest uppercase">
          My Blog
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Sharing about
          <span className="text-violet-500"> Web Dev </span>
          & Technology
        </h1>

        <p className="text-white/60 mt-6 max-w-2xl mx-auto">
          Tempat aku menulis pengalaman belajar, eksperimen project, dan insight
          seputar Next.js, UI/UX, serta dunia programming.
        </p>

        <Link
          href="#articles"
          className="inline-block mt-10 rounded-full bg-violet-600 px-7 py-3 text-sm font-medium hover:bg-violet-500 transition"
        >
          Explore Articles ↓
        </Link>
      </div>
    </section>
  )
}