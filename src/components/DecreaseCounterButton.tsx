interface IDecreaseCounterButtonProps {
    handleClick: () => void;
}

export default function DecreaseCounterButton({
    handleClick,
}: IDecreaseCounterButtonProps): JSX.Element {
    return <button onClick={handleClick}>decrease</button>;
}
