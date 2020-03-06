import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import BordedApi from './Components/BordedApi';
import Letras from './Components/Letras';

class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        
      }
    }

    render(){
      return(
        <div>
          <h1> Dicas de tempo livro </h1>
          <BordedApi/>
          <br/>
          <p>Decore uma letra de música!</p>
          <Letras/>
        </div>
      );
    }
}


export default App;
