import React from 'react'
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core'


const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#67C7EB"
    }
  },
})

function TripCard(props) {
  const history = useHistory()

  const goToApply = () => {
    history.push("/inscricao")
  }

  return (
    <div>
      <Card text="white" style={{ width: '100%', height: '650px', backgroundColor: "black" }}>
        <Card.Img className="d-block w-100" variant="top" alt="imagem bonita" src={`https://picsum.photos/500/300/?a=${props.index}`} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
          <Card.Text>
            {props.description}
          </Card.Text>
          <footer className="blockquote-footer">
            <MuiThemeProvider theme={myTheme}>
              <Button variant="contained" color="secondary" onClick={goToApply}>INSCREVER</Button>
            </MuiThemeProvider>
          </footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TripCard;