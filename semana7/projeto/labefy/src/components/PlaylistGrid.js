import React from 'react'
import PlaylistCard from './PlaylistCard'
import styled from 'styled-components'

// ------- css
const GridDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2.5em;
    margin-bottom: 0;
`

class PlaylistGrid extends React.Component {
  
    render() {
        const card = this.props.playlists.map((item) => {
            return (<PlaylistCard name={item.name}
                img="https://picsum.photos/200/200" 
                id={item.id}
                getPlaylistTracks={this.props.getPlaylistTracks}
                deletePlaylist={this.props.deletePlaylist} />)
        })

      return (
        <GridDiv>
            {card}
        </GridDiv>
      );
    }
  }
  
  export default PlaylistGrid;