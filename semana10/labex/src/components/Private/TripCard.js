import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from '@material-ui/core/Button';

import { useStyles, TripCardDiv } from '../styles'


function TripCard(props) {
    const classes = useStyles();

    return (
        <TripCardDiv>
            <Card onClick={() => props.goToDetails(props.id)} text="white" style={{ minWidth: '260', backgroundColor: "black", color: "white" }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <footer>
                        <Button className={classes.button} onClick={() => props.deleteTrip(props.id)} size="small">DELETE</Button>
                    </footer>
                </Card.Body>
            </Card>
        </TripCardDiv>
    )
}
export default TripCard