import { useState } from 'react';
import Head from 'next/head';

export default function WordCounter() {
  const [text, setText] = useState('');

  const wordCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Word Counter | Toolsy</title>
        <meta name="description" content="Free online word counter to count words and characters instantly." />
      </Head>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-4">Word Counter</h1>
        <textarea
          rows={10}
          className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="mt-4 flex justify-between text-gray-700">
          <p><strong>Words:</strong> {wordCount}</p>
          <p><strong>Characters:</strong> {charCount}</p>
        </div>
      </div>
    </div>
  );
}
