import { EGender } from '../types/user';

interface IGenderLabelProps {
    gender: EGender;
}

export default function GenderLabel({ gender }: IGenderLabelProps): JSX.Element {
    console.log('GenderLabel rendered');

    return <h2>{gender}</h2>;
}
