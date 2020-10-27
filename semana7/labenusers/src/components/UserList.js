import styled from 'styled-components'
import React from "react";
import UserDetails from './UserDetails'

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

class UserList extends React.Component {
    // state = {
    //     seeDetails: false
    // }

    // checkoutDetails = () => {
    //     this.setState({ seeDetails: true })
    // }

    // didmount maneiro 
    componentDidMount = () => {
    this.props.getAllUsers()
    }
    

    render() {
        const showDetails = () => {
            if(this.state.seeDetails){
                return <UserDetails />
            }
        }
        
        const renderedUserList = this.props.users.map((user) => {
            return (<MotherDiv>
                <li key={user.id}>{user.name}</li>
                <Delete onClick={() => this.props.deleteUser(user.id)}>X</Delete>
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