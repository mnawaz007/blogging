import { useState } from 'react';
import Head from 'next/head';

export default function MetaTagGenerator() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Meta Tag Generator | Toolsy</title>
        <meta name="description" content="Free online meta tag generator for SEO." />
      </Head>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-4">Meta Tag Generator</h1>

        <div className="space-y-4">
          <input
            className="w-full p-3 border rounded-md"
            placeholder="Page Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            rows={3}
            className="w-full p-3 border rounded-md"
            placeholder="Meta Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="w-full p-3 border rounded-md"
            placeholder="Keywords (comma separated)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2">Generated Meta Tags</h2>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`<title>${title}</title>
<meta name="description" content="${description}" />
<meta name="keywords" content="${keywords}" />`}
        </pre>
      </div>
    </div>
  );
}
