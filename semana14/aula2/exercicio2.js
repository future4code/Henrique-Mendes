// const fs = require('fs');
// const nomeListaDeTarefa = process.argv[2];
// const novaTarefa = process.argv[3];

// try{
//     fs.writeFileSync(nomeListaDeTarefa, novaTarefa);
//     console.log("Lista de tarefas criada com sucesso!")
// } catch(err){
//     console.log(err)
// }

const fs = require('fs');
const nomeListaDeTarefa = "ToDoList.txt";
const novaTarefa = process.argv[2];

try{
    fs.writeFileSync(nomeListaDeTarefa, novaTarefa);
    console.log("Lista de tarefas criada com sucesso!")
} catch(err){
    console.log(err);
    console.log("Errrourrrr!")
}

try{
    fs.appendFileSync(nomeListaDeTarefa, novaTarefa, 'utf8');
    console.log('Tarefa adicionada com sucesso!');
} catch(err){
    console.error(err);
}