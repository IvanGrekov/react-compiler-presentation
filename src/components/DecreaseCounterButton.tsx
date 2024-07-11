interface IDecreaseCounterButtonProps {
    onClick: VoidFunction;
}

export default function DecreaseCounterButton({
    onClick,
}: IDecreaseCounterButtonProps): JSX.Element {
    return <button onClick={onClick}>decrease</button>;
}
