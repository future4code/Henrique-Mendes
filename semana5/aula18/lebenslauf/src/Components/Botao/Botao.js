import React from 'react';
import './Botao.css';

function Botao(props) {
  return (
    <div className="botao">
        <img src={ props.imagem } alt={ props.alt } />
        <button> { props.textoBotao }</button>
    </div>
  );
}

export default Botao;