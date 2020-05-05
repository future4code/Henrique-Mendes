import { User } from "./User";
import * as moment from "moment";

export class Student implements User{
    id: string;
    name: string;
    email: string;
    birthDate: moment.Moment;
    hobbies: string[];

    constructor(
        id: string,
        name: string,
        email: string,
        birthDate: any,
        hobbies: string[],
    ){}

    // getAgeById(): any {
    //     return moment().diff(this.birthDate, "anos");
    // };

}