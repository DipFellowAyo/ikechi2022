import React from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
  flutteringFlowersContainer: {
    display: 'block',
    position: 'absolute',
    width: '30%',
    // zIndex: '-1',
    transform: 'translate( -50%, -50% )',
    [theme.breakpoints.down("md")]: {
			width: '40%'
		},
    [theme.breakpoints.down("sm")]: {
			position: "revert",
      transform: 'none',
      width: '70%',
      margin: '30px auto'
		},
  },
  flutteringFlowers: {
    width: '100%'
  }
  
}))

const FlutteringFlowers = (props) => {

  const classes = useStyles();

  return (
    <Box style={{top:props.top, left: props.side}} className={classes.flutteringFlowersContainer}>
        <img className={classes.flutteringFlowers} src={process.env.PUBLIC_URL+"/vectors/fluttering_hearts.png"} alt="fluttering_flowers" />
    </Box>
  )
}

export default FlutteringFlowers;