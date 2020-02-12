import React from 'react';
import './App.css';
import CaixaGrande from './Components/CaixaGrande/CaixaGrande';
import CaixaPequena from './Components/CaixaPequena/CaixaPequena';
import IconTexto from './Components/IconTexto/IconTexto';
import Botao from './Components/Botao/Botao';

function App() {
  return (
    <div className="App">
      <CaixaGrande titulo="Dados Pessoais">
        <CaixaPequena subtitulo="Henrique" imagem={ require("./img/zap.png") } alt="ZapZap" texto="Quem sou eu, onde eu estou e quem eh vc?" />
        <IconTexto dados="meu@email.com" alt="email" />
        <IconTexto dados="R. da Avenida, 101" alt="casa" />
        <Botao textoBotao="Ver mais" alt="flecha" />
      </CaixaGrande>
      <CaixaGrande titulo="Prof XP">
        <CaixaPequena subtitulo="Empresa 1" alt="empresa 1" texto="Empresa reconhecida muldialmente" />
        <CaixaPequena subtitulo="Exercito 2" texto="Melhor que o Exercito 1" alt="exercito 2" />
      </CaixaGrande>
      <CaixaGrande titulo="Social">
        <Botao textoBotao="FaceBook" alt="Face-logo" />
      </CaixaGrande>
    </div>
  );
}

export default App;