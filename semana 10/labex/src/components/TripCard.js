import React from 'react'
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { Button, MuiThemeProvider } from '@material-ui/core'
import {myTheme, CardPublic} from './styles'

function TripCard(props) {
  const history = useHistory()

  const goToApply = () => {
    history.push("/apply")
  }

  return (
    <CardPublic>
      <Card text="white" style={{ width: '100%', height: '650px', backgroundColor: "black" }}>
        <Card.Img className="d-block w-100" variant="top" alt="imagem bonita" src={`https://picsum.photos/300/200?a=${props.index}`} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
          <Card.Text>
            {props.description}
          </Card.Text>
          <footer>
            <MuiThemeProvider theme={myTheme}>
              <Button variant="contained" color="secondary" onClick={goToApply}>APPLY</Button>
            </MuiThemeProvider>
          </footer>
        </Card.Body>
      </Card>
    </CardPublic>
  );
}

export default TripCard;