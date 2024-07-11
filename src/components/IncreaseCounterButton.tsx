interface IIncreaseCounterButtonProps {
    onClick: VoidFunction;
}

export default function IncreaseCounterButton({
    onClick,
}: IIncreaseCounterButtonProps): JSX.Element {
    return <button onClick={onClick}>increase</button>;
}
