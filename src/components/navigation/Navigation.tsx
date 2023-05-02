import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='flex justify-center p-5'>
      <ul className='flex flex-col md:flex-row items-center gap-2'>
        <li className='font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
          <Link href="/">Home</Link>
        </li>
        <li className='font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;