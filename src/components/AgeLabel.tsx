interface IAgeLabelProps {
    age: number;
}

export default function AgeLabel({ age }: IAgeLabelProps): JSX.Element {
    console.log('AgeLabel rendered');

    return <h2>{age} y.o.</h2>;
}
