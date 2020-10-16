import React from 'react'
import './Redes.css'
import '../SecaoCompartilhar/SecaoCompartilhar'

class RedeSocial extends React.Component {

    render() {
        return (
            <div className="redes">
                <img src={this.props.icone} />
                <p>{this.props.nome}</p>
                <button id={this.props.id} onClick={this.props.clicou}>Compartilhar</button>
            </div>
        );
    }
}

export default RedeSocial