import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToPostDetails } from '../router/coordinator';

function PostCard(props) {
    const history = useHistory()

    return (<div onClick={() => goToPostDetails(history, props.id)}>
        <h3>{props.username}</h3>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </div>

    )
}

export default PostCard;