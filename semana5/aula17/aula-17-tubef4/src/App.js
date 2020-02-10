import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <body>
        <header className="header">
            <div id="icon">Futuro4 Videos</div>
            <input type="text" id="busca"></input>
        </header>
        <main className="containermain">
            <div id="img1">
                <a href="aula8-video1.html">
                    <img controls src="/imagens-aula8/video1.png" alt="celtic"></img>
                </a>            
                <p>Video 1</p>
            </div>
            <div id="img2">
                <a href="aula8-video2.html">
                    <img controls src="/imagens-aula8/video2.png" alt="blood"></img>
                </a>            
                <p>Video 2</p>
            </div>
            <div id="img3">
                <a href="aula8-video3.html">
                    <img controls src="/imagens-aula8/video3.png" alt="planets"></img>
                </a>            
                <p>Video 3</p>
            </div>
            <div id="img4">
                <a href="aula8-video4.html">
                    <img controls src="/imagens-aula8/video4.png" alt="beach"></img>
                </a>            
                <p>Video 4</p>
            </div>
        </main>
        <footer>
            <p>Fim da pagina</p>
        </footer>
      </body>
      
    </div>
  );
}

export default App;
