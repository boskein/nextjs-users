import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href={'/users'}>
        <h1 className="rounded-md border-2 border-slate-100 p-2">Contactos</h1>
      </Link>
    </main>
  )
}
