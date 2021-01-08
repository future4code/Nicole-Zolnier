import styled from 'styled-components'
import React from "react";
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

const MotherDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Inputs = styled.input`
    width: 115%;
    padding: 0.5em;
    margin: 0.5em;
`
const NiceButton = styled.button`
    padding: 0.5em;
    margin: 0.5em;
    width: 124.5%;
`

class EditUser extends React.Component {
    state = {
        newNameValue: "",
        newEmailValue: ""
    }

    // funções do onchange dos inputs
    onChangeName = (event) => {
        this.setState({newNameValue: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({newEmailValue: event.target.value})
    }

    // função editar usuario
    editUser = (id) => {
        const body = {
            name: this.state.newNameValue,
            email: this.state.newEmailValue
        }
        
        axios.put(`${baseUrl}/${id}`,body, axiosConfig).then(() => {
            this.setState({ newNameValue: "", newEmailValue: "" })
            window.alert("Usuário editado com sucesso!")
            this.props.getUserById()
            this.props.returnToButton()
            this.props.getAllUsers()
        }).catch((err) => {
            console.log(err.message)
            window.alert("Ih deu erro! Tente novamente!")
        })


    }
    render() {
        return (
            <MotherDiv>
                <Inputs placeholder="novo nome"
                value={this.state.newNameValue}
                onChange={this.onChangeName}/>
                <Inputs placeholder="novo email" 
                value={this.state.newEmailValue}
                onChange={this.onChangeEmail}/>
                <NiceButton onClick={() => this.editUser(this.props.userId)}>Salvar!</NiceButton>
            </MotherDiv>
        )
    }
}

export default EditUser