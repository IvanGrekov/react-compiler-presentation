interface IIncreaseCounterButtonProps {
    onClick: () => void;
}

export default function IncreaseCounterButton({
    onClick,
}: IIncreaseCounterButtonProps): JSX.Element {
    return <button onClick={onClick}>increase</button>;
}
