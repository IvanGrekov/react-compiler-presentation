import { IUser, EGender } from '../types/user';

export const DEFAULT_USER: IUser = { id: 0, name: 'John Doe', age: 25, gender: EGender.Male };

export const MOCKED_USERS: IUser[] = [
    { id: 1, name: 'John Doe', age: 25, gender: EGender.Male },
    { id: 2, name: 'Jane Doe', age: 30, gender: EGender.Female },
    { id: 3, name: 'Bob Smith', age: 35, gender: EGender.Male },
    { id: 4, name: 'Alice Johnson', age: 40, gender: EGender.Female },
    { id: 5, name: 'Charlie Brown', age: 20, gender: EGender.Male },
    { id: 6, name: 'Maggie Simpson', age: 22, gender: EGender.Female },
    { id: 7, name: 'Peter Parko', age: 18, gender: EGender.Male },
    { id: 8, name: 'Mary Jown', age: 19, gender: EGender.Female },
    { id: 9, name: 'Tony Stark', age: 45, gender: EGender.Male },
    { id: 10, name: 'Natasha Romanoff', age: 35, gender: EGender.Female },
    { id: 11, name: 'Bruce Woyne', age: 32, gender: EGender.Male },
    { id: 12, name: 'Selina Kylo', age: 30, gender: EGender.Female },
    { id: 13, name: 'Clark Kento', age: 33, gender: EGender.Male },
    { id: 14, name: 'Diana Princo', age: 30, gender: EGender.Female },
    { id: 15, name: 'Barry Ollen', age: 25, gender: EGender.Male },
];
