import React from 'react'
import AddSong from './AddSong'
import styled from 'styled-components'
import goBack from '../img/goBack.svg'
import axios from 'axios'
import TrackCard from './TrackCard'

// ------- coisas pro axios
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

// ------- css
const Nothing = styled.h2`
    color: white;
    margin-left: 2em;
`
const PlaylistName = styled.h1`
    color: white;
    font-size: 2.5rem;
    padding: 1em;
    text-shadow: 3px -1px 2px black;
`
const GoBack = styled.img`
    display:flex;
    align-self: flex-start;
    justify-content: center;
    margin: 0.5em;
    padding: 1em;
`
const ImgTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.2em;
    margin-left: 2em;
`
const Info = styled.div`
    margin-left: 2em;
`

const AddMore = styled.button`
    border: 1px solid black;
    border-radius: 20px;
    background-color: #0511F2;
    color: #FFFFFF;
    padding: 1em;
    margin-left: 10em;
    margin-top: 1em;
`

const Picture = styled.img`
    box-shadow: 2px 0px 4px #000000;
`

// -------------------------------------------
class PlaylistDetails extends React.Component {
    state = {
        add: false
    }

    // display os inputs de adicionar musica
    checkoutAddSong = () => {
        this.setState({ add: !this.state.add })
    }

    // deletar musica
    deleteSong = (pId, trackId) => {
        axios.delete(`${baseUrl}/${pId}/tracks/${trackId}`, axiosConfig).then(() => {
            window.alert("Música deletada! Volte para a tela inicial")
            this.props.getPlaylistTracks()
        }).catch((err) => {
            console.log(err.message)
        })
    }

    render() {
        // mapear as tracks bonitinho
        const mapTracks = this.props.tracks.map((item) => {
            return (<TrackCard name={item.name}
                id={item.id}
                artist={item.artist}
                url={item.url}
                playlistId={this.props.playlistId}
                deleteSong={this.deleteSong} />

            )
        })
        // ver se tem track ou nao
        const renderCorrectly = this.props.quantity !== 0 ? <div>{mapTracks}</div> : <Nothing>Eita, tá vazio aqui</Nothing>
        return (
            <div>
                <GoBack src={goBack} onClick={this.props.goBack} />
                <Info>
                    <ImgTitle>
                        <Picture src={`https://picsum.photos/200/200/?a=${this.props.playlistId}`} />
                        <PlaylistName>{this.props.playlistName}</PlaylistName>
                    </ImgTitle>
                    {renderCorrectly}
                    {this.state.add ? <AddSong playlistId={this.props.playlistId}
                        getPlaylistTracks={this.props.getPlaylistTracks}
                        closePage={this.checkoutAddSong} /> :
                        <AddMore onClick={this.checkoutAddSong}>Adicionar mais músicas</AddMore>}
                </Info>

            </div>
        );
    }
}

export default PlaylistDetails;