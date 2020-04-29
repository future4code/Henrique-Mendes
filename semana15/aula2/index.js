"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var Customer_1 = require("./Customer");
var newUser = new User_1.User("1", "nao@sei.com", "SeiLa", "123");
console.log("O novo usuario tem o id: " + newUser.getEmail() + ", nome: " + newUser.getName() + " e email: " + newUser.getEmail() + " ");
// Exercicio 1
// Chamando o construtor da classe User foi chamado 1x
// Com os atuais metodos, nao eh possivel imprimir a senha
// Exercicio 2
var newCustomer = new Customer_1.Customer("c1", "ola@ola.com", "Cliente1", "123", "123456789");
console.log(newCustomer);
