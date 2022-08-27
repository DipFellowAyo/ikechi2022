import React from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@mui/styles';
import CornerOrnamental from '../components/cornerornamental';
import Navbar from '../components/navbar';


const useStyles = makeStyles(theme => ({
    note: {
        padding: '50px 0',
        [theme.breakpoints.down("sm")]: {
            padding: '50px 0 10px',
		},
    },
    noteH1: {
        letterSpacing: '30px',
        fontSize: '3rem',
        fontWeight: '600',
        color: '#800020',
        fontFamily: 'Handlee, cursive',
        [theme.breakpoints.down("md")]: {
			fontSize: '2rem',
            fontWeight: '500',
            letterSpacing: '20px',
		},
        [theme.breakpoints.down("sm")]: {
            width: '80%',
            margin: 'auto',
			fontSize: '1rem',
            letterSpacing: '15px',
		},
    },
    photoGrid: {
        width: '85%',
        margin: '120px auto 200px',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down("md")]: {
            margin: '20px auto',
			display: 'grid'
		},
        [theme.breakpoints.down("sm")]: {
			
		},
    },
    photoBox1: {
        position: 'relative',
        top: '100px',
        width: '48%',
        overflow: 'hidden',
        [theme.breakpoints.down("md")]: {
			width: '100%',
            margin: '0 0 200px'
		},
        [theme.breakpoints.down("sm")]: {
			
		},
    },
    photoBox2: {
        width: '48%',
        overflow: 'hidden',
        [theme.breakpoints.down("md")]: {
			width: '100%',
		},
        [theme.breakpoints.down("sm")]: {
			
		},
    },
    photo: {
        display: 'block',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    }
}))

const Photos = () => {

    const classes = useStyles();

  return (
    <Box>
        <CornerOrnamental />

        <Navbar />

        <div className={classes.note}>
            <h1 className={classes.noteH1}>OUR PICTURES</h1>
        </div>

        <div className={classes.photoGrid}>
            <Box className={classes.photoBox1}>
                <img className={classes.photo}
                    src={process.env.PUBLIC_URL+"/images/1.JPG"}
                    alt="wedding-img"
                />
            </Box>
            <Box className={classes.photoBox2}>
                <img className={classes.photo}
                    src={process.env.PUBLIC_URL+"/images/2.JPG"}
                    alt="wedding-img"
                />
            </Box>
        </div>

        <div className={classes.photoGrid}>
            <Box className={classes.photoBox1}>
                <img className={classes.photo}
                    src={process.env.PUBLIC_URL+"/images/3.JPG"}
                    alt="wedding-img"
                />
            </Box>
            <Box className={classes.photoBox2}>
                <img className={classes.photo}
                    src={process.env.PUBLIC_URL+"/images/4.JPG"}
                    alt="wedding-img"
                />
            </Box>
        </div>

        <div className={classes.photoGrid}>
            <Box className={classes.photoBox1}>
                <img className={classes.photo}
                    src={process.env.PUBLIC_URL+"/images/5-1.jpg"}
                    alt="wedding-img"
                />
            </Box>
            <Box className={classes.photoBox2}>
                <img className={classes.photo}
                    src={process.env.PUBLIC_URL+"/images/5.JPG"}
                    alt="wedding-img"
                />
            </Box>
        </div>

        <div className={classes.photoGrid}>
            <Box className={classes.photoBox1}>
                <img className={classes.photo}
                    src={process.env.PUBLIC_URL+"/images/7.jpg"}
                    alt="wedding-img"
                />
            </Box>
            <Box className={classes.photoBox2}>
                <img className={classes.photo}
                    src={process.env.PUBLIC_URL+"/images/8.JPG"}
                    alt="wedding-img"
                />
            </Box>
        </div>

        <div className={classes.photoGrid}>
            <Box className={classes.photoBox1}>
                <img className={classes.photo}
                    src={process.env.PUBLIC_URL+"/images/9.jpg"}
                    alt="wedding-img"
                />
            </Box>
            <Box className={classes.photoBox2}>
                <img className={classes.photo}
                    src={process.env.PUBLIC_URL+"/images/10.JPG"}
                    alt="wedding-img"
                />
            </Box>
        </div>

    </Box>
  )
}

export default Photos;