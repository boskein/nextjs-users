import { UserI } from '@/utils/types';
import User from '@/components/users/User';

const UsersList = ({ users }: { users: UserI[] }) => {
  return (
    <ul className='flex flex-col gap-y-10'>
      {
        users?.map((user: UserI, index) => (
          <User {...user} key={index} />
        ))
      }
    </ul>
  );
};

export default UsersList;