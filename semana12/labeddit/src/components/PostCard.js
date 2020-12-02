import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToPostDetails } from '../router/coordinator';
import { votePost } from '../services/feed'

function PostCard(props) {
    const history = useHistory()

    const handleVote = (decision) => {
        const body = {
            direction: decision,
        }
        votePost(body, props.id, props.update)
    }
    return (<div >
        <h3>{props.username}</h3>
        <h1 onClick={() => goToPostDetails(history, props.id)}>{props.title} {props.votesCount}</h1>
        <p>{props.text}</p>
        <button onClick={() => handleVote(1)}>gostei</button>
        <button onClick={() => handleVote(-1)}>nao gostei</button>
    </div>

    )
}

export default PostCard;