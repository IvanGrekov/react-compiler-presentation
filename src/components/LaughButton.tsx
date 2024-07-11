import { useState, useEffect } from 'react';

import LaughIcon from './LaughIcon';

export default function LaughButton(): JSX.Element {
    const [count, setCount] = useState(0);

    const laugh = (): void => {
        setCount((count) => count + 1);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            laugh();
        }, 1000);

        return (): void => {
            clearTimeout(timeoutId);
        };
    }, [laugh]);

    return (
        <button>
            <LaughIcon />
            {count}
        </button>
    );
}
