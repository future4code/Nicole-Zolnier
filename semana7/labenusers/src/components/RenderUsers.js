import styled from 'styled-components'
import React from "react";
import axios from 'axios';
import UserDetails from './UserDetails'
import UserList from './UserList'


// --------- css
const MotherDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const Delete = styled.p`
    padding-left: 1em;
`


// --------- resumindo as coisas pro axios
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

class RenderUsers extends React.Component {
    state = {
        users: [],
        seeDetails: false,
        selectedUser: [],
        searchValue: "",
        userFound: []
    }


    // display detalhes do usuario ou nao
    checkoutDetails = () => {
        this.setState({ seeDetails: !this.state.seeDetails })
    }

    // didmount maneiro 
    componentDidMount = () => {
        this.getAllUsers()
    }

    // função de pegar o usuario pelo id
    getUserById = (userId) => {
        this.checkoutDetails()

        axios.get(`${baseUrl}/${userId}`, axiosConfig).then((response) => {
            this.setState({ selectedUser: response.data })
        }).catch((err) => {
            console.log(err.message)
        })
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
                window.alert("Usuário deletado! Adeus, querido amigo..")
                this.getAllUsers()
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    onChangeSearch = (event) => {
        this.setState({searchValue: event.target.value})
    }

    searchUser = () => {
        const name = this.state.searchValue
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}&email=`, axiosConfig).then((response) => {
            this.setState({ userFound: response.data })
        }).catch((err) => {
            console.log(err.message)
        })
    }

    render() {
        
        const renderedUserList = this.state.users.map((user) => {
            return (<MotherDiv>
                <li onClick={() => this.getUserById(user.id)} key={user.id}>{user.name}</li>
                <Delete onClick={() => this.deleteUser(user.id)}>X</Delete>
            </MotherDiv>)
        })

        const renderScreen = () => {
            if (this.state.seeDetails) {
                return <UserDetails getAllUsers={this.getAllUsers} goBack={this.checkoutDetails} getUserById={this.getUserById} selectedUser={this.state.selectedUser} />
            } else {
                return <UserList searchUser={this.searchUser} searchValue={this.state.searchValue} onChangeSearch={this.onChangeSearch} 
                getUserById={this.getUserById} deleteUser={this.deleteUser}
                userFound={this.state.userFound} renderedUserList={renderedUserList} 
                goBack={this.props.goBack} />
            }
        }

        return (
            <div>
                {renderScreen()}
            </div>
        );

    }
}

export default RenderUsers;
