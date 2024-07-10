interface IAgeLabelProps {
    age: number;
}

export default function AgeLabel({ age }: IAgeLabelProps): JSX.Element {
    console.log('AgeLabel rendered');

    return <p className="label">{age} y.o.</p>;
}
