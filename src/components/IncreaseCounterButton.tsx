import ComponentRenderHighlighter from './ComponentRenderHighlighter';

interface IIncreaseCounterButtonProps {
    handleClick: () => void;
}

export default function IncreaseCounterButton({
    handleClick,
}: IIncreaseCounterButtonProps): JSX.Element {
    return (
        <ComponentRenderHighlighter>
            <button onClick={handleClick}>increase</button>
        </ComponentRenderHighlighter>
    );
}
