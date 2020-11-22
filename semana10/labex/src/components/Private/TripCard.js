import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled, { keyframes } from 'styled-components'

const scaleUp = keyframes`
  0% {
            transform: scale(1);
  }
  100% {
            transform: scale(1.1);
  }

`

const Div = styled.div`
    border: 0.3px solid white;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        animation: ${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
`

const useStyles = makeStyles({
    root: {
        minWidth: 260,
        backgroundColor: 'black',
        color: "white",
        border: "1px",
        borderColor: "white"
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        color: "white",
        fontSize: "1.2rem"
    },
    
});

function TripCard(props) {
    const classes = useStyles();

    return (
        <Div onClick={() => props.goToDetails(props.id)}>
  
            <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.date}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.button} onClick={() => props.goToDetails(props.id)} size="small">See more</Button>
            </CardActions>
        </Card>
        </Div>
    )
}
export default TripCard