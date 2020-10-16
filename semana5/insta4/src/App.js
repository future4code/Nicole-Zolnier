import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (

      <div className={'app-container'}>
        <Post
          nomeUsuario={'monicasouza'}
          fotoUsuario={'https://i.imgur.com/iCKaNqN.png'}
          fotoPost={'https://i.imgur.com/1Xx49yf.png'}
          texto={"Sempre juntas #amigasparasempre"}
        />

        <Post
          nomeUsuario={'magalinda'}
          fotoUsuario={'https://i.imgur.com/PnNQfKB.png'}
          fotoPost={'https://i.imgur.com/KW5oAmF.png'}
          texto={"Tudo passa menos a minha fome"}
        />

        <Post
          nomeUsuario={'cebolinhasemtempero'}
          fotoUsuario={'https://i.imgur.com/e71l1x4.png'}
          fotoPost={'https://i.imgur.com/0pd8gzx.png'}
          texto={"Meu parceiro para todos os planos! #umahoravai"}
        />

        <Post
          nomeUsuario={'cascaocheiroso'}
          fotoUsuario={'https://i.imgur.com/WGQYccD.png'}
          fotoPost={'https://i.imgur.com/cxTv6XQ.pngg'}
          texto={"Nada melhor que um joguinho #reidobaska"}
        />

      </div>


    );
  }
}

export default App;
