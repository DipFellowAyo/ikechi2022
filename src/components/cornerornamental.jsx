import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({

    corner_ornamental_container: {
       position: 'absolute',
       width: '100%',
       display: 'flex',
       justifyContent: 'space-between',
       [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    corner_ornamental1: {
        width: '15%'
    },
    corner_ornamental2: {
        width: '15%',
        transform: 'scaleX(-1)'
    }

}))

function CornerOrnamental() {

    const classes = useStyles();

    return (
        <Box className={classes.corner_ornamental_container}>
            <img className={classes.corner_ornamental1} src={process.env.PUBLIC_URL+"/vectors/corner_ornamental.svg"} alt="corner_ornamental" />
            <img className={classes.corner_ornamental2} src={process.env.PUBLIC_URL+"/vectors/corner_ornamental.svg"} alt="corner_ornamental" />
        </Box>
    )
}

export default CornerOrnamental;