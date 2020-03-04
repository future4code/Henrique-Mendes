import React from 'react';
import axios from 'axios'
import ItemListaDeUsuario from './ItemListaDeUsuario';
import { render } from '@testing-library/react';

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

const mockListaDeUsuarios = [{
  id:'1',
  name:"Henrique",
},
{
  id:'2',
  name:"Joao",
}
]


class ListaDeUsuario extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listaDeUsuarios: [],
    }
  }

  buscarListaDeUsuarios = () => {
    const listaDeUsuariosPromessa = axios.get(`${baseUrl}/users/getAllUsers`, {
      headers: {
        'api-token': 'Henrique',
      }
    })

    listaDeUsuariosPromessa.then(response => {
      const listaDeUsuarios = response.data.result;
      this.setState({ listaDeUsuarios: listaDeUsuarios })
    }).catch(error => {
      alert("Nao conseguimos pegar a lista de usuarios.")
    })
  }

  componentDidMount(){
    this.buscarListaDeUsuarios();
  }

  apagarUsuario = (idDoUsuario) => {
    const promessaApagarUsuario = axios.delete(`&{baseUrl}/users/deleteUser?id=&{idDoUsuario}`,{
      headers: {
        'api-token': "Henrique",
      }
    })

    promessaApagarUsuario.then((response) => {
      alert("usuario apagado");
      this.buscarListaDeUsuarios();
    }).catch((error) => {
      alert("Erro ao apagar");
    })
  }

  render(){
    return(
      <ul>
        {this.state.listaDeUsuarios.map(usuario => (
          <ItemListaDeUsuario>
            {usuario.name} 
            <span onClick={() => this.apagarUsuario(usuario.id)}>X</span>
          </ItemListaDeUsuario>
        ))}
      </ul>
    )
  }  
}

export default ListaDeUsuario;