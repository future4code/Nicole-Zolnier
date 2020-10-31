import React from 'react'
import PlaylistDetails from './PlaylistDetails'
import axios from 'axios'
import CreatePlaylist from './CreatePlaylist'
import ListPlaylist from './ListPlaylist'
import PlaylistGrid from './PlaylistGrid'
import styled from 'styled-components'

// ------- coisas pro axios
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
        Authorization: "nicole-zolnier-dumont"
    }
}

// ------- css
const MotherDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #3A3838;
`

const TwoParts = styled.div`
    display: flex;
`
const PlaylistInList = styled.div`
    width: 20%;
    background-color: #252424;
    box-shadow: inset -7px -7px 20px -7px rgba(0,0,0,1);
    height: 101.5vh;
`

const PlaylistInGrid = styled.div`
    width: 80%;
    background-color: #3A3838;
    height: 100%;
    display: flex;
    justify-content: center;
    box-shadow: inset -8px -9px 65px -8px black;
    
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
            this.setState({ tracks: list, playlistName: name, playlistId: id, trackQuantity: quantity })
        }).catch((err) => {
            console.log(err.message)
        })
    }

    // deletar playlist
    deletePlaylist = (id) => {
        const beSure = window.confirm("Tem certeza que quer deletar a playlist?")
        if (beSure){
            axios.delete(`${baseUrl}/${id}`, axiosConfig).then(() => {
                this.getAllPlaylists()
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


    render() {


        return (
            <MotherDiv>
                <TwoParts>
                    <PlaylistInList>
                        <ListPlaylist playlists={this.state.playlists} getPlaylistTracks={this.getPlaylistTracks} deletePlaylist={this.deletePlaylist} />
                        <CreatePlaylist getAllPlaylists={this.getAllPlaylists} />
                    </PlaylistInList>

                    
                    {this.state.seeDetails ? <PlaylistDetails goBack={this.displayDetails}
                    playlistName={this.state.playlistName}
                    tracks={this.state.tracks}
                    playlistId={this.state.playlistId}
                    getPlaylistTracks={this.getPlaylistTracks}
                    quantity={this.state.trackQuantity} /> : <PlaylistInGrid>
                    <PlaylistGrid playlists={this.state.playlists} getPlaylistTracks={this.getPlaylistTracks} deletePlaylist={this.deletePlaylist} />
                </PlaylistInGrid>}

                </TwoParts>


                

                
            </MotherDiv>
        );
    }
}

export default PlayList;