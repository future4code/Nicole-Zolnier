import React from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

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
            <div>
                <input placeholder="Nome da Playlist"
                value={this.state.nameValue}
                onChange={this.onChangeInput}/>
                <button onClick={this.createPlaylist}>Criar</button>
            </div>
        );
    }
}

export default CreatePlaylist;