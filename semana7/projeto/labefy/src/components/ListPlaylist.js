import React from 'react'
import styled from 'styled-components'
import library from '../img/list.svg'
import home from '../img/home.svg'
import user from '../img/user.svg'

// ------- css
const Together = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2em;
    
`
const Delete = styled.p`
    padding-left: 1em;
    color: #F27405;
    &:hover{
     cursor: pointer;
}
`
const Name = styled.p`
    color: white;
    margin-left: 1em;
    &:hover{
    cursor: pointer;
    color: grey;
}
`
const SectionTitle = styled.h3`
    color: white;
    padding-left: 0.2em;
    &:hover {
        cursor: pointer;
        color: grey;
    }
    &:active {
        opacity: 0;
        cursor: pointer;
    }
`
const Div = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2em;
    margin-bottom: 0;
`
const Icon = styled.img`
    width: 10%;
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
                <Div>
                    <Icon src={home} />
                    <SectionTitle>Home</SectionTitle>
                </Div>
                <Div>
                    <Icon src={user} />
                    <SectionTitle>Usuário</SectionTitle>
                </Div>
                <Div>
                    <Icon src={library} />
                    <SectionTitle>Playlists</SectionTitle>
                </Div>
                {playlistsInAList}
            </div>
        );
    }
}

export default ListPlaylist;