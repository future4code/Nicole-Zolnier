import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useStyles, TripCardDiv} from '../styles'


function TripCard(props) {
    const classes = useStyles();

    return (
        <TripCardDiv>
  
            <Card className={classes.root}>
            <CardContent onClick={() => props.goToDetails(props.id)}>
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
                <Button className={classes.button} onClick={() => props.deleteTrip(props.id)} size="small">DELETE</Button>
            </CardActions>
        </Card>
        </TripCardDiv>
    )
}
export default TripCard