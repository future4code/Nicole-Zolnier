import React from 'react';
import styled from 'styled-components';

const DivCentral = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const PCentralizado = styled.p`
  display: inline;
  text-align: center;
`

class Final extends React.Component {
  render() {
    return (<DivCentral>
      <h2>O FORMULÁRIO ACABOU</h2>
      <PCentralizado>Muito obrigado por participar! Entraremos em contato!</PCentralizado>

    </DivCentral>
    );
  }

}

export default Final;