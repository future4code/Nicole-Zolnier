import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

const DivCentral = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Botao = styled.button`
  margin-top: 2em;
`
const Titulo = styled.h2`
  display: inline;
  text-align: center;
`

class Etapa3 extends React.Component {
  render() {
    return (<DivCentral>
      <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>

      <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"} />

      <PerguntaFechada pergunta={"6. Você fez algum curso complementar?"}
        opcoes={["Curso técnico",
          "Cursos de Inglês",
          "Não fiz curso complementar"]} />

      <Botao onClick={this.props.clica}>Próxima Etapa</Botao>
    </DivCentral>
    );
  }

}

export default Etapa3;