import React from "react";
import Ring from "./ring";
import Box from "@material-ui/core/Box";
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(theme => ({
    // heroNoteContainer: {
    //     width: '90%',
    //     margin: '100px auto',
    //     padding:' 0 0 3%',
    //     textAlign: 'center',
    //     backgroundColor: '#800020',
    //     color: '#ffffff',
    //     [theme.breakpoints.down("md")]: {
	// 		margin: '50px auto',
	// 	},
    //     [theme.breakpoints.down("sm")]: {
	// 		margin: '50px auto',
	// 	},
    // },
    // heroText1: {
    //     backgroundColor: '#ab936b',
    //     color: '#000000',
    //     padding: '20px 0 50px',
    //     fontFamily: 'Handlee, cursive',
    //     fontSize: '2.5rem',
    //     fontWeight: '800',
    //     [theme.breakpoints.down("md")]: {
	// 		fontSize: '2rem',
	// 	},
    //     [theme.breakpoints.down("sm")]: {
    //         padding: '20px 0 20px',
	// 		fontSize: '1.2rem',
	// 	},
    // },
    // heroText2: {
    //     position: 'relative',
    //     padding: '2% 0 0',
    //     fontFamily: 'Montserrat, sans-serif',
    //     fontSize: '1.1rem',
    //     fontWeight: '800',
    //     [theme.breakpoints.down("md")]: {
	// 		fontSize: '0.8rem',
	// 	},
    //     [theme.breakpoints.down("sm")]: {
	// 		fontSize: '0.6rem',
	// 	},
    // }
// }))


function HeroNote() {

    // const classes = useStyles();

    const getDate = () => {
        let todaysDate = new Date();
        const weddingDate = new Date("2022-09-24");
        const diffInMs = Math.abs(weddingDate - todaysDate);
        return Math.ceil(diffInMs / (1000 * 60 *60 * 24)); 
    }

    return (
        
        <Box className='heroNoteContainer'>
            <h1 className='heroText1'>CHISOMEJE <Ring /> IKECHUKWU</h1>
            <h6 className='heroText2'>September 24, 2022.</h6>
            <h6 className='heroText2'>{getDate()} DAYS TO GO!</h6>
        </Box>
    )
}

export default HeroNote;