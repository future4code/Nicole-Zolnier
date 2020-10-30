import React from 'react'
import axios from 'axios'

// ------- coisas pro axios
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

class AddSong extends React.Component {
    state = {
        songNameValue: "",
        artistValue: "",
        urlValue: ""
    }

    // ------- on change de todos os inputs
    onChangeName = (e) => {
        this.setState({songNameValue: e.target.value})
    }

    onChangeArtist = (e) => {
        this.setState({artistValue: e.target.value})
    }

    onChangeUrl = (e) => {
        this.setState({urlValue: e.target.value})
    }

    // adicionar tracks
    addTrack = (id) => {
        const body = {
            name: this.state.songNameValue,
            artist: this.state.artistValue,
            url: this.state.urlValue
        }

        axios.post(`${baseUrl}/${id}/tracks`, body, axiosConfig).then(() => {
            this.setState({ songNameValue: "", artistValue: "", urlValue: ""})
    
            this.props.getPlaylistTracks()
            this.props.closePage()
        }).catch((err) => {
            console.log(err.message)
        })
    }

    render() {
        
        return (
            <div>
                <input placeholder="nome da música"
                value={this.state.songNameValue}
                onChange={this.onChangeName}/>
                <input placeholder="artista"
                value={this.state.artistValue}
                onChange={this.onChangeArtist}/>
                <input placeholder="url da música"
                value={this.state.urlValue}
                onChange={this.onChangeUrl}/>
                <button onClick={() => this.addTrack(this.props.playlistId)}>Adicionar!</button>
            </div>
        );
    }
}

export default AddSong;