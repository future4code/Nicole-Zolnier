import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

class PerguntaFechada extends React.Component {

    render() {
        const opcoes = this.props.opcoes.map((opcao) => {
            return <option>{opcao}</option>
        })
        return (
            <Container>
                <p>{this.props.pergunta}</p>
                <select>{opcoes}</select>
            </Container>
        )
    }
}

export default PerguntaFechada;