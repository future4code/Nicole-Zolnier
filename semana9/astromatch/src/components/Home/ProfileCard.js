import React from "react";
import styled from 'styled-components'
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 450,
  },

})


function ProfileCard(props) {
  const classes = useStyles();
  return (
    <Div>
       <Card className={classes.root}>
       <CardActionArea>
        <CardMedia
          component="img"
          image={props.profile.photo}
          height="70%"
          width="50%"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
          {props.profile.name}, {props.profile.age}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.profile.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
       </Card>
      

 
    </Div>
  );
}

export default ProfileCard


