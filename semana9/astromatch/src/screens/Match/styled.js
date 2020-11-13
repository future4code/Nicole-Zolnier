import styled from 'styled-components'
import {hotPink, skyBlue} from '../../constants/colors'

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
background: ${hotPink}; 
border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: ${skyBlue}; 
border-radius: 10px;
} 
`