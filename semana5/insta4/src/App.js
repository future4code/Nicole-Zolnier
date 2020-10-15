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
          fotoPost={'https://i.imgur.com/fqduYtF.png'}
        />

        <Post
          nomeUsuario={'magalinda'}
          fotoUsuario={'https://i.imgur.com/PnNQfKB.png'}
          fotoPost={'https://i.imgur.com/6zayHjx.png'}
        />

        <Post
          nomeUsuario={'cebolinhasemtempero'}
          fotoUsuario={'https://i.imgur.com/e71l1x4.png'}
          fotoPost={'https://i.imgur.com/3iZKcXI.png'}
        />

        <Post
          nomeUsuario={'cascaocheiroso'}
          fotoUsuario={'https://i.imgur.com/WGQYccD.png'}
          fotoPost={'https://i.imgur.com/BOmQqAA.png'}
        />

      </div>


    );
  }
}

export default App;
