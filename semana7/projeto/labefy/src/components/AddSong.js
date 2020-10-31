import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import add from '../img/addblack.svg'

// ------- coisas pro axios
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

// ------- css
const MotherDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    margin-left: 10em;
`

const Input = styled.input`
    width: 30%;
    padding: 0.7em;
    margin-right: 0.5em;
    border: 1px black;
    border-radius: 20px;
    box-shadow: 2px 4px 26px 3px #000000;
    background-color: #3A3838;
    color: #FFFFFF;
`
const Add = styled.img`
    width: 9%;
    &:hover {
        cursor: pointer;
        opacity: 0;
    }
    &:active {
        opacity: 1;
        cursor: pointer;
    }
`

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
            this.props.closePage()
            window.alert("Música adicionada. Atualize a página")
        }).catch((err) => {
            console.log(err.message)
        })
    }

    render() {
        
        return (
            <MotherDiv>
                <Input placeholder="nome da música"
                value={this.state.songNameValue}
                onChange={this.onChangeName}/>
                <Input placeholder="artista"
                value={this.state.artistValue}
                onChange={this.onChangeArtist}/>
                <Input placeholder="url da música"
                value={this.state.urlValue}
                onChange={this.onChangeUrl}/>
                <Add src={add} onClick={() => this.addTrack(this.props.playlistId)} />
            </MotherDiv>
        );
    }
}

export default AddSong;