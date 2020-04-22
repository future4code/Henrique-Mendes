const nomeDaFuncao = process.argv[2];

const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);

if(nomeDaFuncao === "add"){
    console.log(n1+n2)
} else if(nomeDaFuncao === "sub"){
    console.log(n1-n2)
} else if(nomeDaFuncao === "mult"){
    console.log(n1*n2)
} else if(nomeDaFuncao === "div")
    console.log(n1/n2)