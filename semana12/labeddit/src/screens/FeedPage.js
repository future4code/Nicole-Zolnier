import React from 'react'
import {useProtectedPage} from '../hooks/useProtectedPage'
import { useRequestData } from '../hooks/useRequestData'
import PostCard from '../components/PostCard/PostCard'
import Loading from '../components/Loading'
import CreatePost from '../components/CreatePost/CreatePost'
import styled from 'styled-components'

const PostsContainer = styled.div`
    display: flex;
    gap: 1em;
    flex-direction: column;
    align-items: center;
    background-color: #DAE0E6;
    min-height: 100vh;
    padding-bottom: 2em;
`

function FeedPage() {
  useProtectedPage()
  const [{posts}, update] = useRequestData("/posts")
  return (
    <PostsContainer>
      <CreatePost update={update}/>
   
      {!posts ? <Loading /> : posts.map((item) => {
        return <PostCard image={`https://avatars.dicebear.com/api/avataaars/${item.username}.svg`} update={update} id={item.id} title={item.title} text={item.text} username={item.username} votesCount={item.votesCount} direction={item.userVoteDirection} commentsCount={item.commentsCount} />
      })
      }

    </PostsContainer>
  );
}

export default FeedPage;