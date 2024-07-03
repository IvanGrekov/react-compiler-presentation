import ComponentRenderHighlighter from './ComponentRenderHighlighter';

interface IDecreaseCounterButtonProps {
    handleClick: () => void;
}

export default function DecreaseCounterButton({
    handleClick,
}: IDecreaseCounterButtonProps): JSX.Element {
    return (
        <ComponentRenderHighlighter>
            <button onClick={handleClick}>decrease</button>
        </ComponentRenderHighlighter>
    );
}
