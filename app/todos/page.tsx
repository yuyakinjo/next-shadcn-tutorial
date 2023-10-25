import Link from 'next/link';
import data from '../../data.json';

type Todos = typeof data.todos;

async function getTodos() {
  const res = await fetch('http://localhost:3001/todos');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<Todos>;
}

export default async function Todos() {
  const data = await getTodos();
  return (
    <>
      <Link href="/">Homeに戻る</Link>
      {data.map(({ id, title, completed }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{completed}</p>
        </div>
      ))}
    </>
  );
}
