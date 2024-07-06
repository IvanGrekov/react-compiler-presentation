import { useState } from 'react';

import './App.css';

import CounterLabel from './components/CounterLabel';
import CtrlButtons from './components/CtrlButtons';
import DecreaseCounterButton from './components/DecreaseCounterButton';
import Header from './components/Header';
import IncreaseCounterButton from './components/IncreaseCounterButton';
import NameField from './components/NameField';
import UserDetails from './components/UserDetails';
import { IUser } from './types/user';

function App(): JSX.Element {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState<IUser>({ name: 'John Doe', age: 25, gender: 'male' });

    const increaseCount = (): void => {
        setCount((count) => count + 1);
    };

    const decreaseCount = (): void => {
        setCount((count) => count - 1);
    };

    const changeName = (name: string): void => {
        setUser((user) => ({ ...user, name }));
    };

    return (
        <>
            <Header />

            <div className="card">
                <IncreaseCounterButton onClick={increaseCount} />

                <DecreaseCounterButton onClick={decreaseCount} />

                <CounterLabel count={count} />
            </div>

            <div className="user-card">
                <NameField name={user.name} onChange={changeName} />
                is
                <UserDetails user={user} />
            </div>

            <CtrlButtons />
        </>
    );
}

export default App;
