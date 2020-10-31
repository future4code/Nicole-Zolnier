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
    &:hover {
        cursor: pointer;
        opacity: 0;
    }
    &:active {
        opacity: 1;
        cursor: pointer;
    }
`
const Together = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    justify-content: flex-start;
    align-items: center;
    margin: 1em;
    margin-bottom: 3.5em;
    padding: 0.8em;
`
const Input = styled.input`
    width: 100%;
    padding: 0.7em;
    margin-right: 0.5em;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 2px 4px 26px 3px #000000;
    background-color: #3A3838;
    color: #FFFFFF;
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