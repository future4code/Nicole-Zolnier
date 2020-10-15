import React, { Component } from 'react'
import './SecaoCompartilhar.css'
import  RedeSocial from '../RedeSocial/RedeSocial'
import facebook from './icons/facebook.svg'
import twitter from './icons/twitter.svg'
import instagram from './icons/instagram.svg'


export class SecaoCompartilhar extends Component {
    state = {

    }
    onChangeComentario = (event) => {
    }

    render() {
        return <div className={'share-container'}>
            <div className='redes-legais'>
            <RedeSocial
                icone={facebook}
                nome="Facebook"
            />

            <RedeSocial
                icone={twitter}
                nome="Twitter"
            />

            <RedeSocial
                icone={instagram}
                nome="Instagram"
            />
            </div>
            <button>Compartilhar!</button>
        </div>
    }
}

