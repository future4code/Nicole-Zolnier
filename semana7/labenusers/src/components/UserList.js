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

class UserList extends React.Component {
    render() {
    
        return (
            <div>
                <Goback onClick={this.props.goBack}>Voltar</Goback>
                <div>
                    <input />
                    <button>Buscar!</button>
                </div>
                <Title>Lista de Usuários</Title>
                <div>{this.props.renderedUserList}</div>
            </div>
        
        )
    
    }
}

export default UserList;