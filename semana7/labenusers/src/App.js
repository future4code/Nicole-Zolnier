// import styled from 'styled-components'
import React from "react";
import CreateUser from './components/CreateUser'
import UserList from './components/UserList'
import axios from 'axios';

class App extends React.Component {
  state = {
    seeList: false,
    users: [],
    nameValue: "",
    emailValue: ""
  }

  // funçoes pra mudar pagina
  checkoutUserList = () => {
    this.setState({ seeList: true })
  }

  checkoutCreateUser = () => {
    this.setState({ seeList: false })
  }

  // funçoes de input controlado
  onChangeInputName = (event) => {
    this.setState({ nameValue: event.target.value })
  }

  onChangeInputEmail = (event) => {
    this.setState({ emailValue: event.target.value })
  }


  // --------- funçoes de dados
  // função de pegar os usuarios
  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "nicole-zolnier-dumont"
      }
    }).then((answer) => {
      this.setState({ users: answer.data })
    }).catch((err) => {
      console.log(err.message)
    })
  }


  // função de criar usuarios
  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "nicole-zolnier-dumont"
      }
    }).then((answer) => {
      this.setState({ nameValue: "" })
      this.setState({ emailValue: "" })
      window.alert("Usuário cadastrado com sucesso!")

      this.getAllUsers()
    }).catch((err) => {
      console.log(err.message)
      window.alert("Ih deu erro! Você colocou um @ e um .com? Não pode repetir nomes também!!")
    })
  }

  // função de deletar usuario
  deleteUser = (userId) => {
    const beSure = window.confirm("Tem certeza que quer deletar o usuário?")
    if (beSure) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
        headers: {
          Authorization: "nicole-zolnier-dumont"
        },
        params: {
          id: userId
        }
      }).then((answer) => {
        window.alert("Usuário deletado!")
        this.getAllUsers()
      }).catch((err) => {
        console.log(err.message)
      })
    }
  }

  render() {
    // funçao pra renderizar a lista correta
    const renderScreen = () => {
      if (this.state.seeList) {
        return <UserList goBack={this.checkoutCreateUser}
          users={this.state.users}
          getAllUsers={this.getAllUsers}
          deleteUser={this.deleteUser} />;
      } else {
        return <CreateUser nextPage={this.checkoutUserList}
          onChangeName={this.onChangeInputName}
          onChangeEmail={this.onChangeInputEmail}
          nameValue={this.state.nameValue}
          emailValue={this.state.emailValue}
          createUser={this.createUser} />;
      }
    }
    return (
      <div>
        {renderScreen()}
      </div>
    );

  }
}

export default App;
