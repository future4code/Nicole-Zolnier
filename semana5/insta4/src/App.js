import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const DivMaior = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const DivInputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const InputLindo = styled.input`
  padding: 0.8em;
  margin: 0.5em;
  background-color: whitesmoke;
  border-radius: 2px;
  border-color: grey;
  width: 80%;
  ;
`
const DivBotao = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Botao = styled.button`
  padding: 0.8em;
  margin: 0.5em;
  background-color: whitesmoke;
  border-radius: 2px;
  border-color: grey;
  width: 88%;
  margin-bottom: 1em;
  
`
const DivLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Logo = styled.img`
  width: 90%;
  padding: 0.5em;
  
`


class App extends React.Component {
  state = {
    dados: [
      {
        nomeUsuario: "monicasouza",
        fotoUsuario: "https://i.imgur.com/iCKaNqN.png",
        fotoPost: "https://i.imgur.com/1Xx49yf.png",
        texto: "Sempre juntas #amigasparasempre",
      },

      {
        nomeUsuario: "magalinda",
        fotoUsuario: "https://i.imgur.com/PnNQfKB.png",
        fotoPost: "https://i.imgur.com/KW5oAmF.png",
        texto: "Tudo passa menos a minha fome",
      },

      {
        nomeUsuario: "cebolinhasemsalsinha",
        fotoUsuario: "https://i.imgur.com/e71l1x4.png",
        fotoPost: "https://i.imgur.com/0pd8gzx.png",
        texto: "Meu palceilo pala todos os planos! #umaholavai",
      },

      {
        nomeUsuario: "cascaocheiroso",
        fotoUsuario: "https://i.imgur.com/WGQYccD.png",
        fotoPost: "https://i.imgur.com/cxTv6XQ.pngg",
        texto: "Nada melhor que um joguinho #reidobaska",
      }

    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
    valorInputTexto: ""
  }

  adicionaPost = () => {
    const novoDado = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
      texto: this.state.valorInputTexto
    }

    const novoDados = [... this.state.dados, novoDado];

    this.setState({ dados: novoDados });
    this.setState({ valorInputNomeUsuario: "" });
    this.setState({ valorInputFotoUsuario: "" });
    this.setState({ valorInputFotoPost: "" });
    this.setState({ valorInputTexto: "" });
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  onChangeInputTexto = (event) => {
    this.setState({ valorInputTexto: event.target.value })
  }


  render() {
    const listaPosts = this.state.dados.map((dado) => {

      return (
        <Post
          nomeUsuario={dado.nomeUsuario}
          fotoUsuario={dado.fotoUsuario}
          fotoPost={dado.fotoPost}
          texto={dado.texto}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <DivMaior>
          <DivLogo>
            <Logo src="https://fontmeme.com/temporary/59b96b2cb3e65ad9548006584e1409f3.png" />
          </DivLogo>

          <DivInputs>
            <InputLindo
              value={this.state.valorInputNomeUsuario}
              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Nome do Usuário"}
            />
            <InputLindo
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"Foto do Usuário"}
            />


            <InputLindo
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"Foto para o post"}
            />

            <InputLindo
              value={this.state.valorInputTexto}
              onChange={this.onChangeInputTexto}
              placeholder={"Legenda da foto"}
            />


          </DivInputs>

          <DivBotao>
            <Botao onClick={this.adicionaPost}>Adicionar</Botao>
          </DivBotao>

        </DivMaior>

        {listaPosts}

      </div >

    );
  }
}

export default App;
