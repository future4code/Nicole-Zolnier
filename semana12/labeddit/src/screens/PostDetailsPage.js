import React from 'react'
import { useParams } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useRequestData } from '../hooks/useRequestData'
import { baseUrl } from '../constants/urls'
import Loading from '../components/Loading';
import CommentCard from '../components/CommentCard';

function PostDetailsPage() {
  useProtectedPage()

  const params = useParams()

  const data = useRequestData(`${baseUrl}/posts/${params.id}`, undefined)

  return (
    <div>
      {!data ? <Loading /> : <div>
        <div>
          <div>
            <h3>{data.post.username}</h3>
            <h1>{data.post.title}</h1>
            <p>{data.post.text}</p>
          </div>
          <div>comentar</div>
        </div>
        <div>{data.post.comments.map((item) => {
          return <CommentCard id={item.id} text={item.text} username={item.username} userVoteDirection={item.userVoteDirection} votesCount={item.votesCount} />
        })}</div>
      </div>}
    </div>
  );
}

export default PostDetailsPage;