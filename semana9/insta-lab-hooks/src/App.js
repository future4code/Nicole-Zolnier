import React from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  return (
    <AppContainer>
      <Post
        nomeUsuario={'kimkardashian'}
        fotoUsuario={'https://i.imgur.com/SDZRnKF.png'}
        fotoPost={'https://picsum.photos/200/150/?a=1'}
      />
      <Post
        nomeUsuario={'kyliejenner'}
        fotoUsuario={'https://i.imgur.com/dSWYPwa.png'}
        fotoPost={'https://picsum.photos/200/150/?a=2'}
      />
      <Post
        nomeUsuario={'khloekardashian'}
        fotoUsuario={'https://i.imgur.com/6DL6Vs6.png'}
        fotoPost={'https://picsum.photos/200/150/?a=3'}
      />
    </AppContainer>
  );
}


export default App;
