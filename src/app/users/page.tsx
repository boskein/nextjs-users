import UsersList from '@/components/users/UsersList';
import { UserI } from '@/utils/types';

const getUsersList = async (): Promise<UserI[]> => {
  const users = await fetch('https://reqres.in/api/users');
  const res = await users.json();
  return res.data;
}

const Users = async (): Promise<JSX.Element> => {
  const users = await getUsersList();
  return (
    <main className='w-auto p-6'>
      <UsersList users={users} />
    </main>
  );
};

export default Users;