import React from 'react'
import styled from 'styled-components'

// ------- css
const Together = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 3em;
    margin-top: 1em;
    padding: 0 1em;
    align-items: center;

    &:hover{
        background-color: #252424;
    }
`
const Name = styled.h2`
    width: 100%;    
    color: white;
    &:hover{
     cursor: default;
}
`
const Artist = styled.p`
    width: 50%;
    color: white;
    padding: 0 0.5em;
    &:hover{
     cursor: default;
}
`
const Audio = styled.audio`
    width: 100%;
    &::-webkit-media-controls-panel {
    background-color: #0511F2;
    box-shadow: 2px 4px 26px 3px #000000;
    color: white;
    
  }
    &::-webkit-media-controls-current-time-display,
    ::-webkit-media-controls-time-remaining-display {
        color: white;
  }
`
const Delete = styled.p`
    padding-left: 1em;
    width: 5%;
    color: #F27405;
    &:hover{
     cursor: pointer;
}
`

// -------------------------------------------
class TrackCard extends React.Component {

    render() {
        return (
            <Together>
                <Name>{this.props.name}</Name>
                <Artist>{this.props.artist}</Artist>
                <Audio src={this.props.url} controls />
                <Delete onClick={() => this.props.deleteSong(this.props.playlistId, this.props.id)}>X</Delete>
            </Together>
        );
    }
}

export default TrackCard;