'use client';
import { useRouter } from 'next/navigation';
import { UserI } from '@/utils/types';
import Image from 'next/image';

const User = ({ id, first_name, last_name, avatar, email }: UserI) => {
  const router = useRouter();
  return (
    <li key={id} onClick={() => {
      router.push(`/users/${id}`);
    }} className='flex flex-col md:flex-row md:justify-around items-center hover:bg-neutral-900 p-4'>
      <div className='text-center md:text-start mb-4 md:mb-0'>
        <h5 className='font-semibold antialiased'>{first_name} {last_name}</h5>
        <p className='italic font-medium'>{email}</p>
      </div>
      <div className=''>
        <Image src={avatar} className='rounded-full' alt="Imagen de usuario" width={140} height={140} quality={100} style={{ transform: "translate3d(0, 0, 0)" }} priority />
      </div>
    </li>
  );
};

export default User;