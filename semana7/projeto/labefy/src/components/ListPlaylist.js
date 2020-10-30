import React from 'react'
import styled from 'styled-components'

const Together = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2em;
`
const Delete = styled.p`
    padding-left: 1em;
    color: #F27405;
`
const Name = styled.p`
    color: white;
`


class ListPlaylist extends React.Component {
  
    render() {
        // lista de playlists
        const playlistsInAList = this.props.playlists.map((item) => {
            return (<Together key={item.id}>
                <Name onClick={() => this.props.getPlaylistTracks(item.id, item.name)}>{item.name}</Name>
                <Delete onClick={() => this.props.deletePlaylist(item.id)}>X</Delete>
            </Together>)
            })
      return (
        <div>
            {playlistsInAList}
        </div>
      );
    }
  }
  
  export default ListPlaylist;