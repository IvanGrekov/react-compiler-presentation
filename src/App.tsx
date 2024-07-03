import { useState } from 'react';

import './App.css';

import CounterLabel from './components/CounterLabel';
import DecreaseCounterButton from './components/DecreaseCounterButton';
import Header from './components/Header';
import IncreaseCounterButton from './components/IncreaseCounterButton';

function App(): JSX.Element {
    const [count, setCount] = useState(0);

    const increase = (): void => {
        setCount((count) => count + 1);
    };

    const decrease = (): void => {
        setCount((count) => count - 1);
    };

    return (
        <>
            <Header />

            <div className="card">
                <IncreaseCounterButton handleClick={increase} />

                <DecreaseCounterButton handleClick={decrease} />

                <CounterLabel count={count} />
            </div>
        </>
    );
}

export default App;
