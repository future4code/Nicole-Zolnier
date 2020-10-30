import React from 'react'
import AddSong from './AddSong'
import styled from 'styled-components'

// ------- css
const MotherDiv = styled.div`
    margin: 2em;
`

const Name = styled.h3`
    color: white;
`
const Artist = styled.p`
    color: white;
`

const Nothing = styled.h3`
    color: white;
`

const PlaylistName = styled.h1`
    color: white;
`

class PlaylistDetails extends React.Component {
    state = {
        add: false
    }

    // display os inputs de adicionar musica
    checkoutAddSong = () => {
        this.setState({add: !this.state.add})
    }

    render() {
        // mapear as tracks bonitinho
        const mapTracks = this.props.tracks.map((item) => {
            return (<div key={item.id}>
                <audio src={item.url} controls/>
                <Name>{item.name}</Name>
                <Artist>{item.artist}</Artist>
            </div>)
        })
        // ver se tem track ou nao
        const renderCorrectly = this.props.quantity !== 0 ? mapTracks : <Nothing>Eita, tá vazio aqui</Nothing>
        return (
            <MotherDiv>
                <button onClick={this.props.goBack}>X</button>
                <PlaylistName>{this.props.playlistName}</PlaylistName>
                {renderCorrectly}
                {this.state.add? <AddSong playlistId={this.props.playlistId} 
                getPlaylistTracks={this.props.getPlaylistTracks} 
                closePage={this.checkoutAddSong} /> : 
                <button onClick={this.checkoutAddSong}>Adicionar mais músicas</button>}
            </MotherDiv>
        );
    }
}

export default PlaylistDetails;