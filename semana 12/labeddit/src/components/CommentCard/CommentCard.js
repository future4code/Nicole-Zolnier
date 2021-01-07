import React from 'react'
import { voteComment } from '../../services/feed'
import greyDown from '../../assets/grey-down.svg'
import greyUp from '../../assets/grey-up.svg'
import coloredUp from '../../assets/colored-up.svg'
import coloredDown from '../../assets/colored-down.svg'
import { Heading, Text } from "@chakra-ui/react"
import { Arrow, Avatar, ButtonsContainer, StyledBox, TextContainer, UserThings } from './styled'

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
        <TextContainer>
            <UserThings>
                <Avatar src={props.image} />
                <Heading size="xs" pl="0.4em">u/{props.username}</Heading>
            </UserThings>
            <Text>{props.text}</Text>
        </TextContainer>
    </StyledBox>
    )
}

export default CommentCard;
