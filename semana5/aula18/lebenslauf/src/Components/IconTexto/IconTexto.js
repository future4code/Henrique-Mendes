import React from 'react';
import './IconTexto.css';

function IconTexto(props) {
  return (
    <div className="icon-texto">
      <img src={ props.imagem } alt={ props.alt } />
      <p>{ props.dados }</p>
    </div>

  );
}

export default IconTexto;