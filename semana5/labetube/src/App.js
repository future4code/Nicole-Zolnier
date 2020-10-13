import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <body>
      <div className="tela-inteira">
        <header>
          <h1>LabTube</h1>
          <div className="busca">
          <input type="text" placeholder="Busca" id="campoDeBusca" />
          <img id="iconBusca" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"/>
          </div>
          
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              
              <li className="botoes-meunu-vertical"><img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Home_free_icon.svg" id="icons"/> Início</li>
              <li className="botoes-meunu-vertical"><img src="https://icon-library.com/images/trending-icon/trending-icon-2.jpg" id="icons"/>Em alta</li>
              <li className="botoes-meunu-vertical"><img src="https://cdn1.iconfinder.com/data/icons/youtube-23/31/Vector-4-512.png" id="icons"/>Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical"><img src="https://icon-library.com/images/youtube-icon-png-white/youtube-icon-png-white-22.jpg" id="icons"/>Originais</li>
              <li className="botoes-meunu-vertical"><img src="https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png" id="icons"/>Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>

        <footer>
          <h4>Todos os direitos reservados</h4>
        </footer>
      </div>
    </body>
  );
}

export default App;
