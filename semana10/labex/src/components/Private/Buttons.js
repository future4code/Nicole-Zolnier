import React from 'react'

function Buttons(props) {
  return (
    <div>
        <button onClick={() => props.decideCandidate(true)}>aprovar</button>
        <button onClick={() => props.decideCandidate(false)}>não aprovar</button>
    </div>
  );
}

export default Buttons;