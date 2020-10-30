import React from 'react'
import axios from 'axios'
import add from '../img/add.svg'
import styled from 'styled-components'

// ------- coisas pro axios
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

// ------- css
const Add = styled.img`
    width: 120%;
    display: flex;
    justify-self: center;
    align-self: center;
`
const Together = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    justify-content: flex-start;
    align-items: center;
    background-color: #0511F2;
    margin: 1em;
    padding: 0.8em;
    box-shadow: 2px 0px 4px #000000;
`
const Input = styled.input`
    width: 100%;
    padding: 0.5em;
    margin-right: 0.5em;
`

class CreatePlaylist extends React.Component {
    state = {
        nameValue: ""
    }

    // on change do input de nome
    onChangeInput = (event) => {
        this.setState({nameValue: event.target.value})
    }

    // função de criar playlist
    createPlaylist = () => {
        const body = {
            name: this.state.nameValue
        }

        axios.post(baseUrl, body, axiosConfig).then(() => {
            this.setState({ nameValue: ""})
            window.alert("Playlist criada com sucesso!")
            this.props.getAllPlaylists()
        }).catch((err) => {
            console.log(err.message)
            window.alert("Ih deu erro! Acho que já tem uma playlist com esse nome!")
        })
    }

    render() {
        return (
            <Together>
                <Input placeholder="Nova playlist"
                value={this.state.nameValue}
                onChange={this.onChangeInput}/>
                <div>
                <Add onClick={this.createPlaylist} src={add}/>
                </div>
            </Together>
        );
    }
}

export default CreatePlaylist;