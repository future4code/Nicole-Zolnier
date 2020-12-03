import React from 'react'
import { voteComment } from '../../services/feed'
import greyDown from '../../assets/grey-down.svg'
import greyUp from '../../assets/grey-up.svg'
import coloredUp from '../../assets/colored-up.svg'
import coloredDown from '../../assets/colored-down.svg'
import { Heading, Text } from "@chakra-ui/react"
import { Arrow, ButtonsContainer, StyledBox, TextContainer } from './styled'

function CommentCard(props) {

    const handleVote = (decision) => {
        const body = {
            direction: decision,
        }
        voteComment(body, props.postId, props.commentId, props.update)
    }

    const arrow = () => {
        if (props.direction === 0) {
            return (<>
                <Arrow src={greyUp} onClick={() => handleVote(1)} />
                <Heading size="md">{props.votesCount}</Heading>
                <Arrow src={greyDown} onClick={() => handleVote(-1)} />
            </>)
        } else if (props.direction === 1) {
            return (<>
                <Arrow src={coloredUp} onClick={() => handleVote(0)} />
                <Heading size="md">{props.votesCount}</Heading>
                <Arrow src={greyDown} onClick={() => handleVote(-1)} />
            </>)
        } else {
            return (<>
                <Arrow src={greyUp} onClick={() => handleVote(1)} />
                <Heading size="md">{props.votesCount}</Heading>
                <Arrow src={coloredDown} onClick={() => handleVote(0)} />
            </>)
        }
    }

    return (<StyledBox borderWidth="1px" borderRadius="lg" >
        <ButtonsContainer>
            {arrow()}
        </ButtonsContainer>
        <TextContainer>
            <Heading size="xs">u/{props.username}</Heading>
            <Text>{props.text}</Text>
        </TextContainer>
    </StyledBox>
    )
}

export default CommentCard;