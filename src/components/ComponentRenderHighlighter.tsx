import { PropsWithChildren, useState, useEffect } from 'react';

export default function ComponentRenderHighlighter({ children }: PropsWithChildren): JSX.Element {
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        setBlink(true);
        const timer = setTimeout(() => setBlink(false), 1000);

        return (): void => clearTimeout(timer);
    }, [children]);

    return (
        <div
            style={{
                border: blink ? '2px solid red' : '2px solid transparent',
                padding: '4px',
            }}
        >
            {children}
        </div>
    );
}
