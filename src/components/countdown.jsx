import React, { useEffect, useState } from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    countdown: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    div: {
        width: '15%',
        color: '#ffffff',
        fontFamily: 'Handlee, cursive'
    },
    divH1: {
        fontSize: '4rem', 
        fontWeight: '800',
        [theme.breakpoints.down("md")]: {
			fontSize: '2.3rem', 
		},
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.5rem', 
		},
    },
    divH3: {
        fontSize: '1.2rem',
        fontWeight: '800',
        [theme.breakpoints.down("md")]: {
			fontSize: '1rem', 
		},
        [theme.breakpoints.down("sm")]: {
			fontSize: '0.7rem', 
		},
    }

}))

const Countdown = () => {

    const classes = useStyles();

    const [timer, setTimer] = useState({
        Months: "",
        Days: "",
        Hours: "",
        Minutes: "",
        Seconds: 1
    })
  
    const getDate = () => {
        let todaysDate = new Date();
        const weddingDate = new Date("2022-09-24");
        let diffInMs = Math.abs(weddingDate - todaysDate);
        let diffInDays = Math.ceil(diffInMs / (1000 * 60 *60 * 24));
        let Months = Math.floor(diffInDays / 30);
        let Days = diffInDays % 30 ;
        let Hours = Math.floor((diffInMs / 1000 / 60 / 60) % 24);
        let Minutes = Math.floor((diffInMs / 1000 / 60) % 60);
        let Seconds = Math.floor((diffInMs / 1000) % 60);
        return setTimer({
            Months: Months,
            Days: Days,
            Hours: Hours,
            Minutes: Minutes,
            Seconds: Seconds
        })
    }

    useEffect(() => {
        setInterval(() => {
            (getDate())
        }, 1000);
    }, [])

    
  return (
    <Box>
        {timer.Months + timer.Days + timer.Hours + timer.Minutes + timer.Seconds <= 0 
        ? <Box>
            <h1 className={classes.divH1}>Happy Married Life!🎉✨</h1>
        </Box>
        : <Box>
            <h3 className={classes.divH3}>we'll say yes in...</h3>
            <Box className={classes.countdown}>
                <div className={classes.div} style= {{color: "#FFE5B4"}}>
                    <h1 className={classes.divH1}>{timer.Months}</h1>
                    <h3 className={classes.divH3}>Month</h3>
                </div>
                <div className={classes.div} style= {{color: "#FFE5B4"}}>
                    <h1 className={classes.divH1}>{timer.Days}</h1>
                    <h3 className={classes.divH3}>Days</h3>
                </div>
                <div className={classes.div} style= {{color: "#FFE5B4"}}>
                    <h1 className={classes.divH1}>{timer.Hours}</h1>
                    <h3 className={classes.divH3}>Hours</h3>
                </div>
                <div className={classes.div} style= {{color: "#FFE5B4"}}>
                    <h1 className={classes.divH1}>{timer.Minutes}</h1>
                    <h3 className={classes.divH3}>Minutes</h3>
                </div>
                <div className={classes.div} style= {{color: "#FFE5B4"}}>
                    <h1 className={classes.divH1}>{timer.Seconds}</h1>
                    <h3 className={classes.divH3}>Seconds</h3>
                </div>
            </Box>
        </Box>}
    </Box>
  ) 
}

export default Countdown;