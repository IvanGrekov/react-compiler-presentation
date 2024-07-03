import ComponentRenderHighlighter from './ComponentRenderHighlighter';

interface ICounterLabelProps {
    count: number;
}

export default function CounterLabel({ count }: ICounterLabelProps): JSX.Element {
    return (
        <ComponentRenderHighlighter>
            <h2>{count}</h2>
        </ComponentRenderHighlighter>
    );
}
