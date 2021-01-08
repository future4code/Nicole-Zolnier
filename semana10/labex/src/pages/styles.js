import styled from 'styled-components'
import { Typography, createMuiTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const MainContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  height: 100vh;
`
export const Title = styled(Typography)`
  margin: 1em;
  padding-bottom: 0.5em;
`

export const CandidateGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
`
export const SpacedText = styled.p`
    padding: 1em;
`
export const ApprovedName = styled.li`
    padding: 0.5em;
`

export const CreationForm = styled.form`
	padding: 1em;
	margin: auto;
	margin-bottom: 3em;
	display: flex;
	flex-direction: column;
	gap: 1.2em;
    width: 30vw;
    background-color: white;
    border-radius: 5px;
`
export const LoginMainContainer = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    color: white;
    flex-direction: column;
    height: 100vh;
`
export const CreateContainer = styled.div`
  background-color: black;
  width: auto;
  height: 100vh;
`

export const useStyles = makeStyles({
    create: {
        color: "white",
        background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
        padding: "0.5em",
        fontSize: "1.2rem"
    },
    createTitle: {
        color: "white",
        textAlign: "center",
        padding: "0.5em",
    },
    input: {
        color: "white",
        borderColor: "white"
    },
    button: {
        color: "white",
        background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
        width: "30em",
        margin: '1em',
        marginBottom: '2em',
    },
    welcome: {
        padding: "0.4em",
        marginLeft: "2em"
    }
});

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3em;
  padding: 1em;
  padding-bottom: 0;
`
export const Line = styled.div`
  width: 60px;
  height: 2px;
  background-color: white;
  margin-bottom: 1em;
`

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BlackContainer = styled.div`
  background-color: black;
  color: white;
  width: auto;
  height: 120vh;
`

export const LoginForm = styled.form`
padding: 1em;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1em;
width: 30vw;
background-color: white;
border-radius: 5px;
`

export const Text = styled(Typography)`
    color: white;
    padding: 0.2em;
`
export const ApplyForm = styled.form`
	padding: 1em;
	display: flex;
	flex-direction: column;
	gap: 1em;
    width: 30vw;
    background-color: white;
    border-radius: 5px;
`

export const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',

    },
    secondary: {
      main: "#67C7EB"
    }
  },
})