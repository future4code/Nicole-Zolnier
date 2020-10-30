import React from 'react'
import PlaylistDetails from './PlaylistDetails'
import axios from 'axios'
import CreatePlaylist from './CreatePlaylist'
import ListPlaylist from './ListPlaylist'
import PlaylistGrid from './PlaylistGrid'
import styled from 'styled-components'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

const TwoParts = styled.div`
    display: flex;
`
const PlaylistInList = styled.div`
    width: 20%;
`

const PlaylistInGrid = styled.div`
    width: 80%;
    margin: 1em;
`

class PlayList extends React.Component {
    state = {
        playlists: [],
        seeDetails: false,
        tracks: [],
        playlistName: '',
        playlistId: '',
        trackQuantity: ''
    }

    // didmount nosso de cada dia
    componentDidMount() {
        this.getAllPlaylists()
    }

    // mostrar detalhes sim ou nao
    displayDetails = () => {
        this.setState({ seeDetails: !this.state.seeDetails })
    }

    // pegar todas as playlists
    getAllPlaylists = () => {
        axios.get(baseUrl, axiosConfig).then((response) => {
            const list = response.data.result.list
            this.setState({ playlists: list })
        }).catch((err) => {
            console.log(err.message)
        })
    }

    // pegar tracks da playlist
    getPlaylistTracks = (id, name) => {
        this.displayDetails()

        axios.get(`${baseUrl}/${id}/tracks`, axiosConfig).then((response) => {
            const quantity = response.data.result.quantity
            const list = response.data.result.tracks
            console.log(list)
            this.setState({ tracks: list })
            this.setState({ playlistName: name })
            this.setState({ playlistId: id })
            this.setState({ trackQuantity: quantity })
        }).catch((err) => {
            console.log(err.message)
        })
    }

    // deletar playlist
    deletePlaylist = (id) => {
        axios.delete(`${baseUrl}/${id}`, axiosConfig).then(() => {
            this.getAllPlaylists()
        }).catch((err) => {
            console.log(err.message)
        })
    }



    render() {


        return (
            <div>
                <TwoParts>
                    <PlaylistInList>
                        <ListPlaylist playlists={this.state.playlists} getPlaylistTracks={this.getPlaylistTracks} deletePlaylist={this.deletePlaylist} />
                        <CreatePlaylist getAllPlaylists={this.getAllPlaylists} />
                    </PlaylistInList>

                    <PlaylistInGrid>
                        <PlaylistGrid playlists={this.state.playlists} getPlaylistTracks={this.getPlaylistTracks} deletePlaylist={this.deletePlaylist} />
                    </PlaylistInGrid>


                </TwoParts>


                {this.state.seeDetails ? <PlaylistDetails goBack={this.displayDetails}
                    playlistName={this.state.playlistName}
                    tracks={this.state.tracks}
                    playlistId={this.state.playlistId}
                    getPlaylistTracks={this.getPlaylistTracks}
                    quantity={this.state.trackQuantity} /> : ""}

                
            </div>
        );
    }
}

export default PlayList;