import React from 'react'
import AddSong from './AddSong'

class PlaylistDetails extends React.Component {
    render() {
        const mapTracks = this.props.tracks.map((item) => {
            return (<div>
                <audio src={item.url} controls/>
                <p>{item.name}</p>
                <p>{item.artist}</p>
            </div>)
        })
        const renderCorrectly = this.props.quantity !== 0 ? mapTracks : <p>Eita, tá vazio aqui</p>
        return (
            <div>
                <button onClick={this.props.goBack}>X</button>
                <h1>{this.props.playlistName}</h1>
                {renderCorrectly}
                <button>Adicionar mais músicas</button>
                <AddSong playlistId={this.props.playlistId} getPlaylistTracks={this.props.getPlaylistTracks} />
            </div>
        );
    }
}

export default PlaylistDetails;