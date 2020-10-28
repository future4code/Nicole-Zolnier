import styled from 'styled-components'
import React from "react";
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

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
            <div>
                <input placeholder="novo nome"
                value={this.state.newNameValue}
                onChange={this.onChangeName}/>
                <input placeholder="novo email" 
                value={this.state.newEmailValue}
                onChange={this.onChangeEmail}/>
                <button onClick={() => this.editUser(this.props.userId)}>Salvar!</button>
            </div>
        )
    }
}

export default EditUser