import { User } from "./User";
import { Customer } from "./Customer";

// Exercicio 1
//a. Chamando o construtor da classe User foi chamado 1x
//b. Com os atuais metodos, nao eh possivel imprimir a senha

const newUser: User = new User("1", "nao@sei.com", "SeiLa", "123")

console.log(`O novo usuario tem o id: ${newUser.getEmail()}, nome: ${newUser.getName()} e email: ${newUser.getEmail()} `)

// Exercicio 2
//a. Chamando o construtor da classe Customer foi chamado 1x
//b. Chamando o construtor da classe User foi chamado 2x porque foi 1x eh da class e outra eh pelo fato do Customer ser uma subclasse que invoca a classe mae tambem

const newCustomer: Customer = new Customer("c1", "ola@ola.com", "Cliente1", "123", "123456789")

console.log(newCustomer)

//Exercicio 3