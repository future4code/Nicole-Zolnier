import styled from 'styled-components'

export const ScrollBar = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
overflow: auto;
max-height: 495px;

/* width */
::-webkit-scrollbar {
width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
background: white; 
border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
background: #FE039D; 
border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: #66C7F4; 
border-radius: 10px;
} 
`