import React from 'react'
import {useProtectedPage} from '../hooks/useProtectedPage'
import { useRequestData } from '../hooks/useRequestData'
import {baseUrl} from '../constants/urls'
import PostCard from '../components/PostCard'
import Loading from '../components/Loading'

function FeedPage() {
  useProtectedPage()
  const data = useRequestData(`${baseUrl}/posts`, undefined)

  return (
    <div>
      {!data ? <Loading /> : data.posts.map((item) => {
        return <PostCard id={item.id} title={item.title} text={item.text} username={item.username} votesCount={item.votesCount} commentsCount={item.commentsCount} />
      })

      }
    </div>
  );
}

export default FeedPage;