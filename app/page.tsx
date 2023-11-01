import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold mt-10 my-10">ToDo App</h1>
      <Link href="/todos" about="todo">
        <Button about="go to list">リスト へ GO</Button>
      </Link>
    </>
  );
}
