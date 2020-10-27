import styled from 'styled-components'
import React from "react";

const MotherDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const NiceInput = styled.input`
    margin: 1em;
    padding: 0.5em;
    width: 15vw;
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Goforward = styled.button`
    margin: 2em;
`

class CreateUser extends React.Component {
    render() {
        return (
            <div>
                <Goforward onClick={this.props.nextPage}>Ver lista</Goforward>
                <Title>Cadastrar novo usuário</Title>
                <MotherDiv>
                    <NiceInput
                        placeholder="nome"
                        value={this.props.nameValue}
                        onChange={this.props.onChangeName} />
                    <NiceInput type="text"
                        placeholder="email"
                        value={this.props.emailValue}
                        onChange={this.props.onChangeEmail} />
                    <button onClick={this.props.createUser}>Enviar</button>
                </MotherDiv>
            </div>
        );

    }
}

export default CreateUser;