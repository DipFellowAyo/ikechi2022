import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    goldenRingsContainer: {
        position: 'relative',
        display: 'inline',
        top: '30px',
        [theme.breakpoints.down("md")]: {
			display: 'block',
            top: '5px',
		},
        [theme.breakpoints.down("sm")]: {
			display: 'block',
            top: '0px',
		},
    },
    goldenRings: {
        width: '15%'
    }
}))

function Ring() {

    const classes = useStyles();

    return (
        <Box className={classes.goldenRingsContainer}>
            <img className={classes.goldenRings} src={process.env.PUBLIC_URL+"/vectors/gold_rings.png"} alt="golden-rings" />
        </Box>
    )
}

export default Ring;