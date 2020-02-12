import React from 'react';
import './CaixaGrande.css';

function CaixaGrande(props) {
  return (
    <div className="caixa-grande">
      { props.children }
      <h3> { props.titulo } </h3>
    </div>

  );
}

export default CaixaGrande;