interface ISearchFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchField({ value, onChange }: ISearchFieldProps): JSX.Element {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(e.target.value);
    };

    return <input type="text" placeholder="Search" value={value} onChange={handleChange} />;
}
