interface IIncreaseCounterButtonProps {
    handleClick: () => void;
}

export default function IncreaseCounterButton({
    handleClick,
}: IIncreaseCounterButtonProps): JSX.Element {
    return <button onClick={handleClick}>increase</button>;
}
