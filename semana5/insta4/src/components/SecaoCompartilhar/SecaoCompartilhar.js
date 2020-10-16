import React, { Component } from 'react'
import './SecaoCompartilhar.css'
import RedeSocial from '../RedeSocial/RedeSocial'
import facebook from './icons/facebook.svg'
import twitter from './icons/twitter.svg'
import instagram from './icons/instagram.svg'


export class SecaoCompartilhar extends Component {
    state = {
        mensagem: ""
    }

    onChangeMensagem = (event) => {
        this.setState({ mensagem: event.target.value })
    }

    aoCompartilhar = (event) => {
        alert(`Post enviado para o ${event.target.id} com a mensagem '${this.state.mensagem}'`)
        this.setState({ mensagem: "" })
    }


    render() {
        return <div className={'share-container'}>

            <RedeSocial
                icone={facebook}
                nome={'Facebook'}
                id={'Facebook'}
                clicou={this.aoCompartilhar}
            />

            <RedeSocial
                icone={twitter}
                nome={'Twitter'}
                id={'Twitter'}
                clicou={this.aoCompartilhar}
            />

            <RedeSocial
                icone={instagram}
                nome={'Instagram'}
                id={'Instagram'}
                clicou={this.aoCompartilhar}
            />

            <div className={"inputMensagem"}>
                <input onChange={this.onChangeMensagem} placeholder={"Escreva uma mensagem maneira!"} value={this.state.mensagem} />
            </div>
        </div>
    }
}

