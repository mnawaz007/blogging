import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Toolsy - SEO & Productivity Tools</title>
        <meta name="description" content="Free online SEO and productivity tools to boost your workflow and ranking." />
      </Head>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center">Toolsy</h1>
        <p className="text-center text-gray-600 mt-2">Free SEO & Productivity Tools</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">SEO Tools</h2>
          <ul className="space-y-2">
            <li><Link href="/tools/keyword-density">Keyword Density Checker</Link></li>
            <li><Link href="/tools/meta-tag-generator">Meta Tag Generator</Link></li>
            <li><Link href="/tools/xml-sitemap-generator">XML Sitemap Generator</Link></li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Productivity Tools</h2>
          <ul className="space-y-2">
            <li><Link href="/tools/word-counter">Word Counter</Link></li>
            <li><Link href="/tools/todo-list">Simple To-Do List</Link></li>
            <li><Link href="/tools/focus-timer">Focus Timer</Link></li>
          </ul>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Toolsy. All rights reserved.
      </footer>

    </div>
  );
}

