import React from 'react';
import './App.css';
import InputTarefas from './Components/InputTarefas/InputTarefas';
import OutputTarefas from './Components/OutputTarefas/OutputTarefas';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      novaTarefa: "",
      listaTarefas: [],
    }
    }
  }

  // cuidaNovaTarefa = (event) =>{
  //   const novoValor = event.target.value;
  //   this.setState({novaTarefa: novoValor})
  // }

  // cuidaListaTarefas = (event) =>{
    
  // }


  render = () => {
    return (
      <div className="App">
        <h2>Lista de tarefas</h2>
        <InputTarefas />      
        <ul>        
          <li>{this.props.tarefaImpressa}</li>
          <li>Tarefa2</li>
          <li>Tarefa3</li>
        </ul>
      </div>
    );
  }






export default App;
