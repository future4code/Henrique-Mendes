import { Teacher } from "./Teacher";
import { Student } from "./Student";
import * as moment from "moment";

// export enum Modules {
//     "1" = "Intro",
//     "2" = "Comeco",
//     "3" = "Fica interessante",
//     "4" = "Meio",
//     "5" = "Dificil",
//     "6" = "Nao desiste",
//     "7" = "Fim",
// }

export abstract class Mission {
    private name: string = "";
    private id: string;
    private startDate: moment.Moment;
    private endDate: moment.Moment;
    private teachers: Teacher[];
    private students: Student[];
    private currentModule?: number | undefined;

    constructor(
        id: string,
        startDate: moment.Moment,
        endDate: moment.Moment,
        teachers: Teacher[],
        students: Student[],
        currentModule?: number | undefined,
    ) { }

    public getId(): string {
        return this.id;
    }

    public getName(name: string): string {
        return this.name;
    }

    public getStartDate(): moment.Moment {
        return this.startDate;
    }

    public getEndDate(): moment.Moment {
        return this.endDate;
    }

    public getCurrentModule(): number | undefined {
        return this.currentModule;
    }

    public addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    }

    public addStudent(student: Student) {
        this.students.push(student);
    }

    public setName(name: string) {
        this.name = name;
    }
}