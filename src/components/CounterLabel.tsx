interface ICounterLabelProps {
    count: number;
}

export default function CounterLabel({ count }: ICounterLabelProps): JSX.Element {
    return <h2>{count}</h2>;
}
