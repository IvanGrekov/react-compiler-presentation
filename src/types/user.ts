export enum EGender {
    Male = 'Male',
    Female = 'Female',
}

export interface IUser {
    id: number;
    name: string;
    age: number;
    gender: EGender;
}
