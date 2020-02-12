import React from 'react';
import './CaixaPequena.css';

function CaixaPequena(props) {
  return (
    <div className="caixa-pequena">      
      <h4>{ props.subtitulo }</h4>
      <img src={ props.imagem } alt= { props.alt } />
      <p>{ props.texto }</p>        
    </div>

  );
}

export default CaixaPequena;