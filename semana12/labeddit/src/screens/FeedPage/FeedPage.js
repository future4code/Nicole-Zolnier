import React, { useContext } from 'react'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import PostCard from '../../components/PostCard/PostCard'
import Loading from '../../components/Loading'
import CreatePost from '../../components/CreatePost/CreatePost'
import {PostsContainer} from './styled'
import SearchContext from '../../context/SearchContext'

function FeedPage() {
  const {search} = useContext(SearchContext)
  useProtectedPage()
  const [{posts}, update] = useRequestData("/posts")
  return (
    <PostsContainer>
      <CreatePost update={update}/>
   
      {!posts ? <Loading /> : posts.sort((a,b) => a.createdAt < b.createdAt ? 1 : -1).filter((post) => (
            post.text.toLowerCase().includes(search.toLowerCase())
            || post.title.toLowerCase().includes(search.toLowerCase()) || post.username.toLowerCase().includes(search.toLowerCase()))).map((item) => {
        return <PostCard image={`https://avatars.dicebear.com/api/avataaars/${item.username}.svg`} update={update} id={item.id} title={item.title} text={item.text} username={item.username} votesCount={item.votesCount} direction={item.userVoteDirection} commentsCount={item.commentsCount} />
      })
      }

    </PostsContainer>
  );
}

export default FeedPage;