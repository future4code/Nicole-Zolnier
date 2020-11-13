import styled from 'styled-components'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { paleGrey } from '../../../constants/colors'
import { Badge } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1)
        }
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    }
}));

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${paleGrey};
  }
`
export const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "1px solid currentColor",
        }
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0
        }
    }
}))(Badge);