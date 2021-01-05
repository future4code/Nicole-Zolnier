import React from 'react'
import { useParams } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import Loading from '../../components/Loading';
import CommentCard from '../../components/CommentCard/CommentCard';
import CreateComment from '../../components/CreateComment/CreateComment'
import { Arrow, Avatar, ButtonsContainer, CommentsContainer, DetailsContainer, InfoContainer, MainContainer, StyledBox, TextContainer, UserThings } from './styled'
import { Heading, Text } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import greyDown from '../../assets/grey-down.svg'
import greyUp from '../../assets/grey-up.svg'
import coloredUp from '../../assets/colored-up.svg'
import coloredDown from '../../assets/colored-down.svg'
import { votePost } from '../../services/feed'


function PostDetailsPage() {
  useProtectedPage()

  const params = useParams()

  const [{ post }, update] = useRequestData(`/posts/${params.id}`)

  const handleVote = (decision) => {
    const body = {
      direction: decision,
    }
    votePost(body, params.id, update)
  }

  const arrow = () => {
    if (post.userVoteDirection === 0) {
      return (<>
        <Arrow src={greyUp} onClick={() => handleVote(1)} />
        <Heading size="md">{post.votesCount}</Heading>
        <Arrow src={greyDown} onClick={() => handleVote(-1)} />
      </>)
    } else if (post.userVoteDirection === 1) {
      return (<>
        <Arrow src={coloredUp} onClick={() => handleVote(0)} />
        <Heading size="md">{post.votesCount}</Heading>
        <Arrow src={greyDown} onClick={() => handleVote(-1)} />
      </>)
    } else {
      return (<>
        <Arrow src={greyUp} onClick={() => handleVote(1)} />
        <Heading size="md">{post.votesCount}</Heading>
        <Arrow src={coloredDown} onClick={() => handleVote(0)} />
      </>)
    }
  }


  return (
    <MainContainer>
      {!post ? <Loading /> : <DetailsContainer>
        <StyledBox borderWidth="1px" borderRadius="lg">
          <InfoContainer>
            <ButtonsContainer>
              {arrow()}
            </ButtonsContainer>
            <TextContainer>
              <UserThings>
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${post.username}.svg`} />
                <Heading size="xs" pl="0.4em">u/{post.username}</Heading>
              </UserThings>
              <Heading pb="0.2em" size="lg">{post.title}</Heading>
              <Text>{post.text}</Text>
              <Text pt="0.3em" textAlign="end"><ChatIcon color="grey" /> {post.commentsCount} {post.commentsCount === 1 ? "comentário" : "comentários"}</Text>
            </TextContainer>
          </InfoContainer>
          <CreateComment update={update} id={post.id} />
        </StyledBox>
        <CommentsContainer>{post.comments.sort((a,b) => a.createdAt < b.createdAt ? 1 : -1).map((item) => {
          return <CommentCard image={`https://avatars.dicebear.com/api/avataaars/${item.username}.svg`} direction={item.userVoteDirection} commentId={item.id} postId={params.id} update={update} id={item.id} text={item.text} username={item.username} userVoteDirection={item.userVoteDirection} votesCount={item.votesCount} />
        })}</CommentsContainer>
      </DetailsContainer>}
    </MainContainer>
  );
}

export default PostDetailsPage;