import React from 'react';
import axios from 'axios';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

class Spotif4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todasPlaylist:[],
            playlist: null,
        }
    }


    criaNovaPlaylist = async (event) => {
        const novaPlaylist = event.target.value;
        const response = await axios.post(`${baseURL}/playlists/createPlaylist`)
        this.setState({ playlist: response.data })
    }



    render() {
        return(
            <div>
                <p>Spofif4</p>
                <input
                    type="text"
                    placeholder="Noma da playlist"
                    value={this.state.playlist}
                />
                <button 
                    onClick={this.criaNovaPlaylist}>
                    Criar Playlist
                </button>
                <p>Lista criada: {this.state.playlist}</p>
            </div>
        )
    }
}

export default Spotif4;