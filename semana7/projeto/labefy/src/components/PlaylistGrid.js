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
const Hello = styled.h1`
  color: white;
  font-size: 3rem;
  display: flex;
  justify-content: flex-start;
  text-shadow: 3px -1px 2px black;
`

class PlaylistGrid extends React.Component {

  render() {
    const card = this.props.playlists.map((item) => {
      return (<PlaylistCard name={item.name}
        img={`https://picsum.photos/200/200/?a=${item.id}`}
        id={item.id}
        getPlaylistTracks={this.props.getPlaylistTracks}
        deletePlaylist={this.props.deletePlaylist} />)
    })

    return (
      <div>
        <Hello>Bem vinde ao Labefy!</Hello>
        <GridDiv>
          {card}
        </GridDiv>
      </div>
    );
  }
}

export default PlaylistGrid;