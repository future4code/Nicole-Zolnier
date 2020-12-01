import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToPostDetails } from '../router/coordinator';
import { vote } from '../services/feed'

function PostCard(props) {
    const history = useHistory()

    return (<div >
        <h3>{props.username}</h3>
        <h1 onClick={() => goToPostDetails(history, props.id)}>{props.title} {props.votesCount}</h1>
        <p>{props.text}</p>
        <button onClick={() => vote(1, props.id)}>gostei</button>
        <button onClick={() => vote(-1, props.id)}>nao gostei</button>
    </div>

    )
}

export default PostCard;