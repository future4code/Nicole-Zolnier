import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

class PerguntaAberta extends React.Component {
    state = {
        valorInputs: ""
    }
    

    onChangeInput = (event) => {
        this.setState({ valorInputs: event.target.value });
    }

    render() {

        return (
            <Container>
                <p>{this.props.pergunta}</p>
                <input type="text" value={this.state.valorInputs} onChange={this.onChangeInput}/>
            </Container>
        );
    }

}

export default PerguntaAberta;