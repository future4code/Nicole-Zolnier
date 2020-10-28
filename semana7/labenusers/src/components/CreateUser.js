import styled from 'styled-components'
import React from "react";
import axios from 'axios';

// --------- css
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

// --------- resumindo as coisas pro axios
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

class CreateUser extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    }

    // funçoes de input controlado
    onChangeInputName = (event) => {
        this.setState({ nameValue: event.target.value })
    }

    onChangeInputEmail = (event) => {
        this.setState({ emailValue: event.target.value })
    }

    // função de criar usuarios
    createUser = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }

        axios.post(baseUrl, body, axiosConfig).then(() => {
            this.setState({ nameValue: "", emailValue: "" })
            window.alert("Usuário cadastrado com sucesso!")

        }).catch((err) => {
            console.log(err.message)
            window.alert("Ih deu erro! Você colocou um @ e um .com? Não pode repetir nomes também!!")
        })
    }

    render() {
        return (
            <div>
                <Goforward onClick={this.props.nextPage}>Ver lista</Goforward>
                <Title>Cadastrar novo usuário</Title>
                <MotherDiv>
                    <NiceInput
                        placeholder="nome"
                        value={this.state.nameValue}
                        onChange={this.onChangeInputName} />
                    <NiceInput type="text"
                        placeholder="email"
                        value={this.state.emailValue}
                        onChange={this.onChangeInputEmail} />
                    <button onClick={this.createUser}>Enviar</button>
                </MotherDiv>
            </div>
        );

    }
}

export default CreateUser;