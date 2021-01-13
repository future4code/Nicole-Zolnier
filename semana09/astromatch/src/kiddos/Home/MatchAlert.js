import React from 'react'
import {Snackbar} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

function MatchAlert(props) {
  return (
    <Snackbar open={props.open} autoHideDuration={1500} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={props.close}>
        <Alert elevation={6} variant="filled" onClose={props.close} severity="success">
          It's a match!
        </Alert>
    </Snackbar>

  )


}
  
export default MatchAlert;