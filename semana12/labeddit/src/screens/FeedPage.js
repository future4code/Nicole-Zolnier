import React from 'react'
import {useProtectedPage} from '../hooks/useProtectedPage'
// import { useRequestData } from '../hooks/useRequestData'
// import {baseUrl} from '../constants/urls'
import PostCard from '../components/PostCard/PostCard'
import Loading from '../components/Loading'
import CreatePost from '../components/CreatePost'
import { usePosts } from '../hooks/usePosts'
import styled from 'styled-components'

const PostsContainer = styled.div`
    display: flex;
    gap: 2em;
    flex-direction: column;
    align-items: center;
    background-color: #C4C4C4;
`

function FeedPage() {
  useProtectedPage()
  // const data = useRequestData(`${baseUrl}/posts`, undefined)
  const [{posts}, update] = usePosts()

  return (
    <PostsContainer>
      <CreatePost update={update}/>
   
      {!posts ? <Loading /> : posts.map((item) => {
        return <PostCard update={update} id={item.id} title={item.title} text={item.text} username={item.username} votesCount={item.votesCount} direction={item.userVoteDirection} commentsCount={item.commentsCount} />
      })
      }

    </PostsContainer>
  );
}

export default FeedPage;