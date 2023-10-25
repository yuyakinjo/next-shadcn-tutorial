import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold mt-10">ToDo App</h1>
        <Link href="/todos" about="test" className="text-lg py-2">
          リスト
        </Link>
      </div>
    </main>
  );
}
