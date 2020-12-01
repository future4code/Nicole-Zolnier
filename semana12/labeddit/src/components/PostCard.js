import React from 'react'

function PostCard(props) {
    return (<div>
        <h3>{props.username}</h3>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </div>

    )
}

export default PostCard;