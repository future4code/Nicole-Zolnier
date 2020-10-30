import React from 'react'
import AddSong from './AddSong'

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
                <p>{item.name}</p>
                <p>{item.artist}</p>
            </div>)
        })
        // ver se tem track ou nao
        const renderCorrectly = this.props.quantity !== 0 ? mapTracks : <p>Eita, tá vazio aqui</p>
        return (
            <div>
                <button onClick={this.props.goBack}>X</button>
                <h1>{this.props.playlistName}</h1>
                {renderCorrectly}
                {this.state.add? <AddSong playlistId={this.props.playlistId} 
                getPlaylistTracks={this.props.getPlaylistTracks} 
                closePage={this.checkoutAddSong} /> : 
                <button onClick={this.checkoutAddSong}>Adicionar mais músicas</button>}
            </div>
        );
    }
}

export default PlaylistDetails;