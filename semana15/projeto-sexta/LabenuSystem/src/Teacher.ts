import { User } from "./User";

export enum Specialities {
    React = "REACT",
    Redux = "REDUX",
    CSS = "CSS",
    Testes = "TESTES",
    Typescript = "TYPESCRIPT",
    OOP = "OOP"
};

export class Teacher implements User{
    id: string;
    name: string;
    email: string;
    speciality: Specialities[];

    constructor(
        id: string,
        name: string,
        email: string,
        speciality: Specialities[],
    ){}
    
}