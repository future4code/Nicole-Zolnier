import React from 'react'
import './Redes.css'

class RedeSocial extends React.Component {
    render () {
        return (
            <div className="redes">
                <img src={this.props.icone} />
                <p>{this.props.nome}</p>
                
            </div>
        );
    }
}

export default RedeSocial