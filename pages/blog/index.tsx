import Head from 'next/head';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'seo-tips-for-beginners',
    title: '10 Simple SEO Tips for Beginners',
    excerpt: 'Learn how to improve your Google rankings with easy-to-follow SEO strategies.',
    date: 'April 26, 2025',
  },
  {
    slug: 'boost-productivity-daily',
    title: '7 Daily Habits to Boost Your Productivity',
    excerpt: 'These simple habits can help you stay focused and get more done every day.',
    date: 'April 24, 2025',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Blog | Toolsy</title>
        <meta name="description" content="Read the latest tips on SEO and productivity." />
      </Head>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-6">Toolsy Blog</h1>
        {blogPosts.map((post) => (
          <div key={post.slug} className="mb-6">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-1 inline-block">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
