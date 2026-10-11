import Link from 'next/link';
import Image from 'next/image';
import { posts, categories } from '../data/posts';

export const metadata = {
  title: 'Car Repair Blog Dubai | Tips & Guides | Al Suwaidi Auto',
  description: 'Expert car repair tips, maintenance guides, and cost breakdowns for Dubai drivers. From AC repair to engine diagnostics, learn from 20+ years of experience.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-white to-green-50 pt-12 pb-16 sm:pt-16 sm:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #10B981 1.5px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white border border-green-500/30 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gray-700">CAR CARE BLOG</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Tips & Guides for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Dubai Drivers
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed">
            Expert advice from 20+ years of repairing cars in Dubai's extreme climate. Real cost breakdowns, symptom guides, and maintenance schedules.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-10 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  cat === 'All'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md shadow-green-200'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">

            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-green-200 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  <span className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>

                  <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <p className="text-[11px] text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}{' '}
                    · {post.author}
                  </p>
                  <h2 className="font-black text-gray-900 text-base sm:text-lg leading-tight mb-3 group-hover:text-green-600 transition">
                    {post.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-xs font-bold text-green-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-green-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
              Need Help With Your Car?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-6 max-w-xl mx-auto">
              Free pick-up & drop-off across Dubai. Same-day service for most repairs. Call us now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/971554969599"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 hover:bg-gray-50 px-6 sm:px-8 py-3 rounded-full font-bold text-sm transition shadow-lg"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+971554969599"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 rounded-full font-bold text-sm transition"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}