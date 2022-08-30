import "./photos.css";
// import Image from '../../../src/1.JPG'
import React from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@mui/styles';
import CornerOrnamental from '../../components/cornerornamental';
import Navbar from '../../components/navbar';


const useStyles = makeStyles(theme => ({
    photoLayout: {
        // backgroundImage: `url(${Image})`,
        // backgroundPosition: 'top',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        padding: '30% 0',
        position: 'relative',
        width: '100%',
        // overflow: 'hidden',
        backgroundColor: '#000000',
        [theme.breakpoints.down("md")]: {
			padding: '0',

		},
    },
    photoLayoutImg: {
        // height: '100%',
        display: 'block',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        opacity: '0.25',
        [theme.breakpoints.down("md")]: {
			display: 'none',
		},
    },
    innerDivs: {
        position: 'absolute',
        width: '100%',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        transform: 'translate( -50%, -50% )',
        [theme.breakpoints.down("md")]: {
			// position: '',
            display: 'block',
            transform: 'none',
            top: '0',
            left: '0'
		},
    },
    note: {
        padding: '30px 0',
        [theme.breakpoints.down("sm")]: {
            padding: '30px 0 50px',
		}
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
        width: '90%',
        margin: '100px auto',
        display: 'flex',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down("md")]: {
            width: '80%',
            margin: '0 auto ',
			display: 'grid'
		},
        [theme.breakpoints.down("sm")]: {
			
		},
    },
    photoBox1: {
        position: 'relative',
        width: '30%',
        overflow: 'hidden',
        // border: '3px solid #ab936b',
        cursor: 'pointer',
        // height: '350px',
        "&:hover": {
            transform: 'scale(1.1)',
            transition: 'all 0.3s'
        },
        [theme.breakpoints.down("md")]: {
            width: '100%',
            cursor: 'none',
            margin: '50px auto',
			"&:hover": {
                transform: 'none',
            },
		},
        [theme.breakpoints.down("sm")]: {
			
		},
    },
    photo: {
        border: '3px solid #ab936b',
        borderRadius: '1.5rem',
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

        <Box className={classes.photoLayout}>
            <img className={classes.photoLayoutImg} 
                src={process.env.PUBLIC_URL+"/images/1.JPG"}
                alt="hero-img"
            />

            <div className={classes.innerDivs}>
                <div className={classes.photoGrid}>
                    <Box className={classes.photoBox1}>
                        <img className={classes.photo}
                            src={process.env.PUBLIC_URL+"/images/2.JPG"}
                            alt="wedding-img"
                        />
                    </Box>
                    <Box className={classes.photoBox1}>
                        <img className={classes.photo}
                            src={process.env.PUBLIC_URL+"/images/3.JPG"}
                            alt="wedding-img"
                        />
                    </Box>
                    <Box className={classes.photoBox1}>
                        <img className={classes.photo}
                            src={process.env.PUBLIC_URL+"/images/4.JPG"}
                            alt="wedding-img"
                        />
                    </Box>
                </div>

                <div className={classes.photoGrid}>
                    <Box className={classes.photoBox1}>
                        <img className={classes.photo}
                            src={process.env.PUBLIC_URL+"/images/1.JPG"}
                            alt="wedding-img"
                        />
                    </Box>
                    <Box className={classes.photoBox1}>
                        <img className={classes.photo}
                            src={process.env.PUBLIC_URL+"/images/5.JPG"}
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
                    <Box className={classes.photoBox1}>
                        <img className={classes.photo}
                            src={process.env.PUBLIC_URL+"/images/7.jpg"}
                            alt="wedding-img"
                        />
                    </Box>
                </div>

                <div className={classes.photoGrid}>
                    <Box className={classes.photoBox1}>
                        <img className={classes.photo}
                            src={process.env.PUBLIC_URL+"/images/8.JPG"}
                            alt="wedding-img"
                        />
                    </Box>
                    <Box className={classes.photoBox1}>
                        <img className={classes.photo}
                            src={process.env.PUBLIC_URL+"/images/9.jpg"}
                            alt="wedding-img"
                        />
                    </Box>
                    <Box className={classes.photoBox1}>
                        <img className={classes.photo}
                            src={process.env.PUBLIC_URL+"/images/10.JPG"}
                            alt="wedding-img"
                        />
                    </Box>
                </div>
            </div>

            
        </Box>
    </Box>
  )
}

export default Photos;