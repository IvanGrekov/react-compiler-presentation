// import { useState } from 'react';

import './App.css';

// import CounterLabel from './components/CounterLabel';
// import CtrlButtons from './components/CtrlButtons';
// import DecreaseCounterButton from './components/DecreaseCounterButton';
import Header from './components/Header';
// import IncreaseCounterButton from './components/IncreaseCounterButton';
// import NameField from './components/NameField';
// import SearchField from './components/SearchField';
// import UserDetails from './components/UserDetails';
// import UserList from './components/UserList';
// import { DEFAULT_USER } from './constants/mockedUsers';

function App(): JSX.Element {
    // const [count, setCount] = useState(0);
    // const [user, setUser] = useState(DEFAULT_USER);
    // const [searchValue, setSearchValue] = useState('');

    // setSearchValue((prev) => `${prev} hi`);

    // const increaseCount = (): void => {
    //     setCount((count) => count + 1);
    // };

    // const decreaseCount = (): void => {
    //     setCount((count) => count - 1);
    // };

    // const changeName = (name: string): void => {
    //     setUser((user) => ({ ...user, name }));
    // };

    // const changeSearchValue = (value: string): void => {
    //     setSearchValue(value);
    // };

    return (
        <>
            <Header />

            {/* <div className="counter-card">
                <IncreaseCounterButton onClick={increaseCount} />

                <DecreaseCounterButton onClick={decreaseCount} />

                <CounterLabel count={count} />
            </div> */}

            {/* <div className="user-card">
                <NameField name={user.name} onChange={changeName} />
                is
                <UserDetails user={user} />
            </div> */}

            {/* <div className="user-list-card">
                <SearchField value={searchValue} onChange={changeSearchValue} />
                <UserList searchValue={searchValue} />
            </div> */}

            {/* <CtrlButtons /> */}
        </>
    );
}

export default App;
