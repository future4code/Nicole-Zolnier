import styled from 'styled-components'
import React from "react";



const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Goback = styled.button`
    margin: 2em;
`
const MotherDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const Delete = styled.p`
    padding-left: 1em;
`
const DivInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const SearchInput = styled.input`
    width: 15%;
    padding: 0.5em;
    margin: 0.5em;
`
const ButtonSearch = styled.button`
    padding: 0.5em;
`

class UserList extends React.Component {
    renderCorrectUser = () => {
        if(!this.props.userFound[0]){
            return <div>{this.props.renderedUserList}</div>
        } else {
            return (<MotherDiv><li onClick={() => this.props.getUserById(this.props.userFound[0].id)} >{this.props.userFound[0].name}</li>
            <Delete onClick={() => this.props.deleteUser(this.props.userFound[0].id)}>X</Delete>
            </MotherDiv>)
        }
    } 

    render() {
        return (
            <div>
                <Goback onClick={this.props.goBack}>Voltar</Goback>
                <Title>Lista de Usuários</Title>
                <DivInput>
                    <SearchInput defaultValue={this.props.searchValue}
                    onChange={this.props.onChangeSearch}/>
                    <ButtonSearch onClick={this.props.searchUser}>Buscar!</ButtonSearch>
                </DivInput>
                <div>{this.renderCorrectUser()}</div>
            </div>
        
        )
    
    }
}

export default UserList;