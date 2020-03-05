import React from 'react';
import axios from 'axios'


const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

// const promessaCriarNovoUsuario = axios.post(`${baseUrl}/users/createUser`, {


const mockDeCadastro = {
  name: "Henrique",
  email: "teste@teste.com"
}

class TelaDeCadastro extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name:"",
        email: "",
      }
    }

    lidaComMudancaNome = (event) => {
      const novoValor = event.target.value;
      this.setState({ name:novoValor });
    }

    lidaComMudancaEmail = (event) => {
      const novoValor = event.target.value;
      this.setState({ email:novoValor });
    }

    lidaComSalvarUsuario = () => {
      const novoUsuario = {
        name: this.state.name,
        email: this.state.email,
      }

      const promessaDeNovoUsuario = axios.post(`${baseUrl}/users/createUser`, novoUsuario, {
        headers: {
          'api-token': 'Henrique',
        }
      })

      promessaDeNovoUsuario.then(response => {
        alert("Criado novo usuario com sucesso");
      }).catch(error => {
        alert("Erro, deu ruim!")
        console.log(error.response.data.message);
      })
    }
  
    render() {
      return (
        <div>            
          <p>Criar novo usuário</p>
          <input 
            type="text"
            placeholder="nome"
            value={this.state.name}
            onChange={this.lidaComMudancaNome}
          />
          <p>Email:</p>
          <input
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.lidaComMudancaEmail}
          />
          <button onClick={this.lidaComSalvarUsuario}>Salvar</button>
        </div>
      );
    }
  }

export default TelaDeCadastro;