import Head from 'next/head';
import Stopwatch from '../components/Stopwatch';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <Head>
        <title>Stopwatch</title>
        <meta name="description" content="A modern stopwatch application with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full max-w-md p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Stopwatch</h1>
        <Stopwatch />
      </main>
    </div>
  );
}
