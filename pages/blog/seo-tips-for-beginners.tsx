import Head from 'next/head';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>10 Simple SEO Tips for Beginners | Toolsy</title>
        <meta name="description" content="Improve your search rankings with these beginner-friendly SEO tips." />
      </Head>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
        <Link href="/blog" className="text-blue-800 hover:underline">&larr; Back to Blog</Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">10 Simple SEO Tips for Beginners</h1>
        <p className="text-sm text-gray-black mb-6">April 26, 2025</p>

        <p className="mb-4">If you're new to SEO, don't worry! These 10 simple tips will help you optimize your site and get found on search engines.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use proper page titles and meta descriptions.</li>
          <li>Focus on relevant keywords.</li>
          <li>Create high-quality, helpful content.</li>
          <li>Optimize images with alt text.</li>
          <li>Make your site mobile-friendly.</li>
          <li>Use clean URLs with keywords.</li>
          <li>Speed up your website.</li>
          <li>Use internal linking wisely.</li>
          <li>Share your content on social media.</li>
          <li>Track performance using Google Analytics.</li>
        </ul>
      </div>
    </div>
  );
}
