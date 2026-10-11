import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts, getPostBySlug, getRelatedPosts } from '../../data/posts';

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Al Suwaidi Auto Repair Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(params.slug);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-white to-green-50 pt-8 pb-12 sm:pt-12 sm:pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #10B981 1.5px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-green-600 transition">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-green-600 transition">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold truncate">{post.category}</span>
          </nav>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              · {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-black text-sm">
              AS
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">{post.author}</p>
              <p className="text-xs text-gray-500">20+ years in Dubai auto repair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="relative h-[250px] sm:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <article>
            {post.content.split('\n').map((line, i) => {
              const trimmed = line.trim();

              if (trimmed.startsWith('## ')) {
                return <h2 key={i} className="text-2xl sm:text-3xl font-black text-gray-900 mt-10 mb-4">{trimmed.replace('## ', '')}</h2>;
              }
              if (trimmed.startsWith('### ')) {
                return <h3 key={i} className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-3">{trimmed.replace('### ', '')}</h3>;
              }
              if (trimmed.startsWith('- ')) {
                return <li key={i} className="text-gray-700 ml-5 my-1.5">{trimmed.replace('- ', '')}</li>;
              }
              if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return <p key={i} className="font-bold text-gray-900 my-3">{trimmed.replace(/\*\*/g, '')}</p>;
              }
              if (trimmed === '') return null;
              return <p key={i} className="text-gray-700 leading-relaxed my-4">{trimmed}</p>;
            })}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-3xl p-6 sm:p-10 text-center shadow-xl shadow-green-200">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3">
              Need This Service in Dubai?
            </h3>
            <p className="text-white/90 text-sm sm:text-base mb-5">
              Free pick-up & drop-off. Same-day service. 1-year warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/971554969599"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 hover:bg-gray-50 px-6 py-3 rounded-full font-bold text-sm transition shadow-lg"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+971554969599"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-bold text-sm transition"
              >
                📞 +971 55 4969599
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-16 sm:pb-20 bg-gradient-to-b from-white via-green-50/30 to-white pt-12">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {rp.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 group-hover:text-green-600 transition">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-gray-500">{rp.excerpt.slice(0, 100)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}