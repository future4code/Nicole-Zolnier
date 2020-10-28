import styled from 'styled-components'
import React from "react";
import UserDetails from './UserDetails'
import axios from 'axios';


// --------- css
const MotherDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Delete = styled.p`
    padding-left: 1em;
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Goback = styled.button`
    margin: 2em;
`

// --------- resumindo as coisas pro axios
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

class UserList extends React.Component {
    state = {
        users: []
    }

    // seeDetails: false
    // checkoutDetails = () => {
    //     this.setState({ seeDetails: !this.state.seeDetails})
    // }

    // didmount maneiro 
    componentDidMount = () => {
        this.getAllUsers()
    }

    // função de pegar os usuarios
    getAllUsers = () => {
        axios.get(baseUrl, axiosConfig).then((response) => {
            this.setState({ users: response.data })
        }).catch((err) => {
            console.log(err.message)
        })
    }

    // função de deletar usuario
    deleteUser = (userId) => {
        const beSure = window.confirm("Tem certeza que quer deletar o usuário?")
        if (beSure) {
            axios.delete(`${baseUrl}/${userId}`, axiosConfig).then(() => {
                window.alert("Usuário deletado!")
                this.getAllUsers()
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    render() {
        const showDetails = () => {
            if (this.state.seeDetails) {
                return <UserDetails />
            }
        }

        const renderedUserList = this.state.users.map((user) => {
            return (<MotherDiv>
                <li key={user.id}>{user.name}</li>
                <Delete onClick={() => this.deleteUser(user.id)}>X</Delete>
                {/* onClick={this.checkoutDetails} */}
            </MotherDiv>)
        })
        return (
            <div>
                <Goback onClick={this.props.goBack}>Voltar</Goback>
                <Title>Lista de Usuários</Title>
                <div>{renderedUserList}</div>
                <div>{showDetails}</div>
            </div>
        );

    }
}

export default UserList;