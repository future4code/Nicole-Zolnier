import React from 'react'
import { voteComment } from '../services/feed';

function CommentCard(props) {

    const handleVote = (decision) => {
        voteComment(decision, props.postId, props.commentId, props.update)
    }
    return (<div>
        <h5>votos: {props.votesCount}</h5>
        <h3>{props.username}</h3>
        <p>{props.text}</p>
        <button onClick={() => handleVote(1)}>gostei</button>
        <button onClick={() => handleVote(-1)}>nao gostei</button>
    </div>

    )
}

export default CommentCard;
