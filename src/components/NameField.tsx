interface INameFieldProps {
    name: string;
    onChange: (name: string) => void;
}

export default function NameField({ name, onChange }: INameFieldProps): JSX.Element {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(e.target.value);
    };

    return <input type="text" value={name} onChange={handleChange} />;
}
