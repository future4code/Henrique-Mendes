import { Student } from "./Student";
import { Teacher, Specialities } from "./Teacher";
import { NightMission } from "./NightMission";
import { DayMission } from "./DayMission";

const studentA = new Student("S1", "Aluno 1", "aluno1@1.com", "01/01/01", ["conversar", "viajar"]);
const studentB = new Student("S2", "Aluno 2", "aluno2@2.com", "02/02/02", ["futebol", "basquete"]);
const studentC = new Student("S3", "Aluno 3", "aluno3@3.com", "03/03/03", ["numero3"]);

const teacherA = new Teacher("T1", "Prof1", "prof1@1.com", [Specialities.CSS] )
const teacherB = new Teacher("T2", "Prof2", "prof2@2.com", [Specialities.React])
const teacherC = new Teacher("T3", "Prof3", "prof3@3.com", [Specialities.Redux])
const teacherD = new Teacher("T4", "Prof4", "prof4@4.com", [Specialities.Testes])

const dayClass = new DayMission("M1", "01/01", "01/02", [teacherA, teacherB], [studentA, studentB])
const nightClass = new NightMission("M1-na-night", "01/01", "01/02", [teacherC, teacherD], [studentC])