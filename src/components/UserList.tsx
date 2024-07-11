import { MOCKED_USERS } from '../constants/mockedUsers';

import UserListItem from './UserListItem';

interface IUserListProps {
    searchValue: string;
}

export default function UserList({ searchValue }: IUserListProps): JSX.Element {
    const filteredUsers = MOCKED_USERS.filter(({ name }) => {
        const nameLower = name.toLowerCase();
        const searchValueLower = searchValue.toLowerCase();

        return nameLower.includes(searchValueLower);
    });

    return (
        <div className="user-list">
            {filteredUsers.map((user) => (
                <UserListItem key={user.id} user={user} />
            ))}
        </div>
    );
}
