import React from 'react'
import styled from 'styled-components'

// ------- css
const Name = styled.h3`
    color: white;
    padding: 0;
    margin: 0;
`
const Delete = styled.p`
    color: white;
    background-color: #0511F2;
    padding: 0.5em;
    width: 92%;
    display: flex;
    justify-content: center;
    box-shadow: 2px 0px 4px #000000;
`

const Picture = styled.img`
    box-shadow: 2px 0px 4px #000000;
`

class PlaylistCard extends React.Component {

    render() {
        return (
            <div>
                <Picture src={this.props.img} />
                <div>
                    <Name onClick={() => this.props.getPlaylistTracks(this.props.id, this.props.name)}>{this.props.name}</Name>
                    <Delete onClick={() => this.props.deletePlaylist(this.props.id)}>Delete Playlist</Delete>
                </div>

            </div>
        );
    }
}

export default PlaylistCard;