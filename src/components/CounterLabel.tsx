interface ICounterLabelProps {
    count: number;
}

export default function CounterLabel({ count }: ICounterLabelProps): JSX.Element {
    return <p className="counter-label">{count}</p>;
}
