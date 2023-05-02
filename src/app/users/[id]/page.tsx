import { UserI } from '@/utils/types';
import Image from 'next/image';

const getUser = async (id: string): Promise<UserI> => {
  const users = await fetch(`https://reqres.in/api/users/${id}`)
  const res = await users.json();
  return res.data;
}

const User = async ({ params: { id } }: { params: { id: string } }) => {
  const user = await getUser(id);

  return (
    <div className='flex flex-col items-center justify-center p-6'>
      <Image src={user.avatar} className='rounded-full pb-2' alt="Imagen de perfil" width={140} height={140} quality={100} />
      <div className='text-center'>
        <h3 className='font-semibold'>{user.id} / {user.first_name} - {user.last_name}</h3>
        <p className='italic'>{user.email}</p>
      </div>
    </div>
  );
};

export default User;