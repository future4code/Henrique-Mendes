import React from 'react';
import axios from 'axios';

const baseUrl = "https://api.lyrics.ovh/v1"

class Letras extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            letraAtual:"",
            artistaAtual: "",
            musicaAtual: "",
        }
    }

    gerarLetra = async () => {
        const response = await axios.get(`${baseUrl}/${this.state.artistaAtual}/${this.state.musicaAtual}`)

        this.setState ({ letraAtual: response.data });
    }    

    capturaArtista = (event) => {
        const novoArtista = event.target.value;

        this.setState({ artistaAtual:novoArtista });
    }

    capturaMusica = (event) => {
        const novaMusica = event.target.value;

        this.setState({ musicaAtual:novaMusica });
    }

    // mostraLetra = () => {

    // }

    render(){
        return(
            <div>
                <input 
                    type="text"
                    placeholder="Nome do artista"
                    value={this.state.artistaAtual}
                    onChange={this.capturaArtista}
                />
                <br/>
                <br/>
                <input 
                    type="text"
                    placeholder="Nome do musica"
                    value={this.state.musicaAtual}
                    onChange={this.capturaMusica}
                />
                <button onClick={this.gerarLetra}>Procurar letra da música</button>
                {this.state.artistaAtual && this.state.musicaAtual &&
                    <p>{this.state.letraAtual}</p>
                }
            </div>
        )
    }
}

export default Letras;