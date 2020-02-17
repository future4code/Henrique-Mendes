import React from 'react';
import './App.css';
import PostFoto from './components/postFoto/postFoto';

function App() {
  return (
    <div className="App">
      <PostFoto 
        fotoPerfil={ require ("./icons/account_circle-24px.svg") }
        altFotoPerfil="foto perfil"
        nomePerfil="SeuMadroga"
        fotoPostada="https://www.hypeness.com.br/wp-content/uploads/2018/12/imagens-surreais.jpg"
        altFotoPostada="post"
        iconLike={require ("./icons/favorite.svg")}
        altIconLike="coracao negro"
        numeroLikes=""
        iconComentario={ require ("./icons/comment_icon.svg") }
        altIconComentario="balao"
      />

    </div>
  );
}

export default App;