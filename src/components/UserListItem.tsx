// import { memo } from 'react';

import { IUser } from '../types/user';

import Name from './Name';
import UserDetails from './UserDetails';

interface IUserListItemProps {
    user: IUser;
}

export default function UserListItem({ user }: IUserListItemProps): JSX.Element {
    return (
        <div className="user-list-item">
            <Name name={user.name} />
            <UserDetails user={user} />
        </div>
    );
}

// export default memo(UserListItem);
