import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import TelaDeCadastro from './Components/TelaDeCadastro';
import ListaDeUsuario from './Components/ListaDeUsuario';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      telaAtual: 'cadastro',
    }
  }
  

  lidaComMudancaDeTela = () => {
    if(this.state.telaAtual === "cadastro"){
      this.setState({ telaAtual: 'lista' })
    } else{
      this.setState({ telaAtual: 'cadastro' })
    }
  }

  render() {
    const textoDoBotao = this.state.telaAtual === 'cadastro' ? 'ir para lista' : 'ir para o cadastro';



    return (
      <div>
        <button onClick={this.lidaComMudancaDeTela}>{ textoDoBotao }</button>
        { this.state.telaAtual === 'cadastro' ? <TelaDeCadastro/> : <ListaDeUsuario/> }        
      </div>
    );
  }
}


export default App;
