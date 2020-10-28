import styled from 'styled-components'
import React from "react";
import axios from 'axios';
import EditUser from './EditUser'


const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`
const MotherDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Goback = styled.button`
    margin: 2em;
`
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}


class UserDetails extends React.Component {
    state = {
        edit: false
    }

    // display os inputs de editar
    checkoutEdition = () => {
        this.setState({edit: !this.state.edit})
    }

    deleteUser = (userId) => {
        const beSure = window.confirm("Tem certeza que quer deletar o usuário?")
        if (beSure) {
            axios.delete(`${baseUrl}/${userId}`, axiosConfig).then(() => {
                window.alert("Usuário deletado! Volte para a página de Lista!")
                this.props.getAllUsers()
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    render() {
        return (
            <div>
                <Goback onClick={this.props.goBack}>Voltar</Goback>
                <MotherDiv>
                    <Title>Detalhes do Usuário</Title>
                    <p>Nome: {this.props.selectedUser.name}</p>
                    <p>Email: {this.props.selectedUser.email} </p>
                    {this.state.edit? <EditUser getAllUsers={this.props.getAllUsers}
                    getUserById={this.props.getUserById}
                    returnToButton={this.checkoutEdition}
                     userId={this.props.selectedUser.id}/> 
                     : <button onClick={this.checkoutEdition}>Editar!</button>}
                    <button onClick={() => this.deleteUser(this.props.selectedUser.id)}>Deletar Usuário</button>
                </MotherDiv>
            </div>

        );

    }
}

export default UserDetails;