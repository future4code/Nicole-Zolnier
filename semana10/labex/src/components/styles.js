import {makeStyles} from '@material-ui/core/styles'
import styled, { keyframes } from 'styled-components'
import {Typography, createMuiTheme} from '@material-ui/core'

export const useStyles = makeStyles({
    logout: {
      color: "white",
      background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
    },
    normal: {
      color: "white",
    },
    aprove: {
      color: "white",
      background: 'linear-gradient(45deg,#62bc82 100%, #FF8E53 90%)',
    },
    donot: {
      color: "white",
      background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      color: "white",
      fontSize: "1.2rem"
    },
    apply: {
      width: "20%",
      marginLeft: "2em"
    }
})

export const Header = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: space-between;
  background-color: black;
`

export const AdminLogo = styled.img`
  width: 10%;
  cursor: pointer;
`
export const StarkxLogo = styled.img`
width: 15%;
cursor: pointer;
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-evenly;
`
const scaleUp = keyframes`
  0% {
            transform: scale(1);
  }
  100% {
            transform: scale(1.1);
  }

`

export const CardPublic = styled.div`
    cursor: default;
    &:hover {
        animation: ${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
`


export const TripCardDiv = styled.div`
    border: 0.3px solid white;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        animation: ${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
`

export const Line = styled.div`
width: 60px;
height: 2px;
background-color: white;
margin-bottom: 1em;
margin-top: 2em;
`

export const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Title = styled(Typography)`
  padding: 0.5em;
  color: white;
`
export const HowContainer = styled.div`
  background-color: black;
  color: white;
`

export const CardsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4em;
  padding-bottom: 6em;
`

export const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#67C7EB"
    }
  },
})

export const SloganContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background-color: black;
color: white;
margin: 0;
`

export const PrettyFamily = styled.img`
width: 60%;
margin-bottom: 6em;
`

export const TextButtonContainer = styled.div`
padding: 1em;
margin-left: 2em;
display: flex;
flex-direction: column;
`
export const Credits = styled(Typography)`
color: white;
margin: 0.2em;
padding-right: 20em;
padding-bottom: 1.5em;
`

export const TripsContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background-color: black;
width: 100%;
height: 100%;
`

export const GridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-gap: 2.5em;
padding: 1em;
margin-bottom: 8em;
`