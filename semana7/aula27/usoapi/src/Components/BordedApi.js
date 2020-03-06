import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const baseUrl = "http://www.boredapi.com/api/activity/"

class BordedApi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            atividadeAtual: "",
            numeroDePessoas: 1,
            recursosParaAtividade: 0,
        }
    }

    mudaAtividadePorPessoas = (event) => {
        const NovoNumeroDePessoas = event.target.value;

        this.setState({ numeroDePessoas: NovoNumeroDePessoas })
    }

    gerarAtividadeBotao = async () => {
        const response = await axios.get(`http://www.boredapi.com/api/activity?participants=${this.state.numeroDePessoas}`)
        this.setState ({ atividadeAtual: response.data });
    }


    render(){
        console.log(this.state.atividadeAtual)
        return(
            <div>
                <input 
                    type="number"
                    value={this.state.numeroDePessoas}
                    placeholder="numero de pessoas"
                    onChange={this.mudaAtividadePorPessoas}
                />
                <button onClick={this.gerarAtividadeBotao}>Gerar atividade!</button>
                { this.state.atividadeAtual &&
                    <div>
                        <p>Atividade: {this.state.atividadeAtual.activity}</p>
                        <p>Dificuldade: {this.state.atividadeAtual.accessibility}</p>
                        <p>Tipo: {this.state.atividadeAtual.type}</p>
                        <p>link: {this.state.atividadeAtual.link}</p>
                        <p>$$$: {this.state.atividadeAtual.price}</p>
                    </div>
                }
            </div>
        );
    }
}

export default BordedApi;


// import React, { Component } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// const baseURL = "http://www.boredapi.com/api/activity/";

// class BoredAPI extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             currentActivity: {}
//         }
//     }

//     componentDidMount(){
//         this.getRandomActivity();
//     }

//     getRandomActivity = async () => {
//         // Usando o axios para bater na API do BoredAPI
//         // no endpoint que retorna uma atividade aleatória
//         const response = await axios.get(baseURL);
        
//         this.setState({ currentActivity: response.data })
//     }

//     render() {
//         return(
//             <div>
//                 <button onClick={this.getRandomActivity}>Sortear atividade aleatória</button>
//                 <h1>Nome: { this.state.currentActivity.activity }</h1>
//                 <h2>Categoria: { this.state.currentActivity.type }</h2>
//                 <h3>Número de Participantes: { this.state.currentActivity.participants }</h3>
//             </div>
//         )
//     }
// }

// export default BoredAPI;