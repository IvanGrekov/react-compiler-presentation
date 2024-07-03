import { IUser } from '../types/user';

import AgeLabel from './AgeLabel';
import GenderLabel from './GenderLabel';

interface IUserDetailsProps {
    user: IUser;
}

export default function UserDetails({ user }: IUserDetailsProps): JSX.Element {
    const { gender, age } = user;

    return (
        <>
            <GenderLabel gender={gender} />
            ,
            <AgeLabel age={age} />
        </>
    );
}
