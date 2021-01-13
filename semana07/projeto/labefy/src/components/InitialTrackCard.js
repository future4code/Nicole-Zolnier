import React from 'react'
import styled from 'styled-components'

// ------- css
const Together = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    margin-left: 3em;
    padding: 0 1em;
    align-items: center;

    &:hover{
        background-color: #252424;
    }
`
const Name = styled.p`
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
const Audio = styled.p`
    width: 100%;    
    color: white;
    &:hover{
     cursor: default;
    }
`

// -------------------------------------------
class TrackCard extends React.Component {

    render() {
        return (
            <Together>
                <Name>TÍTULO</Name>
                <Artist>ARTISTA</Artist>
                <Audio>PLAY</Audio>
            </Together>
        );
    }
}

export default TrackCard;