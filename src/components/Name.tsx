interface INameProps {
    name: string;
}

export default function Name({ name }: INameProps): JSX.Element {
    return (
        <p className="label" style={{ fontWeight: 'bold' }}>
            {name}
        </p>
    );
}
