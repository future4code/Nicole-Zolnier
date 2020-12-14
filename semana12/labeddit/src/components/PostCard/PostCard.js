import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToPostDetails } from '../../router/coordinator'
import { votePost } from '../../services/feed'
import { Heading, Text } from "@chakra-ui/react"
import { ChatIcon } from '@chakra-ui/icons'
import { Arrow, Avatar, ButtonsContainer, StyledBox, TextContainer, UserThings } from './styled'
import greyDown from '../../assets/grey-down.svg'
import greyUp from '../../assets/grey-up.svg'
import coloredUp from '../../assets/colored-up.svg'
import coloredDown from '../../assets/colored-down.svg'


function PostCard(props) {
    const history = useHistory()

    const handleVote = (decision) => {
        const body = {
            direction: decision,
        }
        votePost(body, props.id, props.update)
    }

    const arrow = () => {
        if (props.direction === 0) {
            return (<>
                <Arrow onMouseOver={(e) => (e.currentTarget.src = coloredUp)}
                    onMouseOut={(e) => (e.currentTarget.src = greyUp)} src={greyUp} onClick={() => handleVote(1)} />
                <Heading size="md">{props.votesCount}</Heading>
                <Arrow onMouseOver={(e) => (e.currentTarget.src = coloredDown)}
                    onMouseOut={(e) => (e.currentTarget.src = greyDown)} src={greyDown} onClick={() => handleVote(-1)} />
            </>)
        } else if (props.direction === 1) {
            return (<>
                <Arrow src={coloredUp} onClick={() => handleVote(0)} />
                <Heading size="md">{props.votesCount}</Heading>
                <Arrow onMouseOver={(e) => (e.currentTarget.src = coloredDown)}
                    onMouseOut={(e) => (e.currentTarget.src = greyDown)} src={greyDown} onClick={() => handleVote(-1)} />
            </>)
        } else {
            return (<>
                <Arrow onMouseOver={(e) => (e.currentTarget.src = coloredUp)}
                    onMouseOut={(e) => (e.currentTarget.src = greyUp)} src={greyUp} onClick={() => handleVote(1)} />
                <Heading size="md">{props.votesCount}</Heading>
                <Arrow src={coloredDown} onClick={() => handleVote(0)} />
            </>)
        }
    }

    return (<StyledBox borderWidth="1px" borderRadius="lg" >
        <ButtonsContainer>
            {arrow()}
        </ButtonsContainer>
        <TextContainer onClick={() => goToPostDetails(history, props.id)}>

            <UserThings>
                <Avatar src={props.image} />
                <Heading size="xs" pl="0.4em">u/{props.username}</Heading>
            </UserThings>

            <Heading pb="0.2em" size="lg">{props.title} </Heading>

            <Text>{props.text}</Text>

            <Text pt="0.3em" textAlign="end"><ChatIcon color="grey" /> {props.commentsCount} {props.commentsCount === 1 ? "comentário" : "comentários"}</Text>

        </TextContainer>

    </StyledBox>

    )
}

export default PostCard;