import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@mui/styles';
import HeroNote from "./heronote";
import Navbar from "./navbar";
import CornerOrnamental from "./cornerornamental";
import FlutteringFlowers from "./flutteringflowers";
import Avatar from "./roundedpicture";
import Countdown from "./countdown";
import Event from "./event";

const useStyles = makeStyles(theme => ({
  hero: {
    position: 'relative',
    width: '90%',
    margin: 'auto',
    backgroundColor: '#000000',
    overflow: 'hidden',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    [theme.breakpoints.down("sm")]: {
			
		},
  },
  heroImg: {
    display: 'block',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    opacity: '0.25',
    [theme.breakpoints.down("sm")]: {
			
		},
  },
  heroHeader: {
    position: 'absolute',
    fontFamily: 'Montserrat, sans-serif',
    width: '100%',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    transform: 'translate( -50%, -50% )',
    fontSize: '4rem',
    color: '#ffffff',
    [theme.breakpoints.down("md")]: {
			fontSize: '2.5rem',
		},
    [theme.breakpoints.down("sm")]: {
			fontSize: '1rem',
		},
  },
  avatarBoard: {
    width: '90%',
    margin: 'auto',
    [theme.breakpoints.down("sm")]: {
			margin: '50px auto'
		},
  },
  line1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
			margin: '60px auto'
		},
    [theme.breakpoints.down("sm")]: {
			display: 'grid',
      justifyContent: 'normal'
		},
  },
  lineText: {
    width: '50%',
    [theme.breakpoints.down("md")]: {
			width: '55%',
		},
    [theme.breakpoints.down("sm")]: {
			width: '90%',
      margin: 'auto'
		},
  },
  couple: {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    margin: '30px auto',
    "&:before": {
      marginRight: '10px',
      content: '""',
      flex: '1 1',
      borderBottom: '1px solid',
      margin: 'auto'
    },
    "&:after": {
      marginLeft: '10px',
      content: '""',
      flex: '1 1',
      borderBottom: '1px solid',
      margin: 'auto'
    }
  },
  innerTextH2: {
    marginBottom: '20px',
    fontFamily: 'Handlee, cursive',
    fontSize: '3.5rem', 
    fontWeight: '800',
    [theme.breakpoints.down("md")]: {
			fontSize: '2.3rem', 
		},
    [theme.breakpoints.down("sm")]: {
			fontSize: '2rem', 
		},
  },
  innerTextH6: {
    marginTop: '-10px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.8rem', 
    fontWeight: '400',
    [theme.breakpoints.down("md")]: {
			
		},
    [theme.breakpoints.down("sm")]: {
			fontSize: '0.5rem', 
		},
  },
  article: {
    position: 'relative',
    width:' 90%',
    margin: '50px auto',
    backgroundColor: '#000000',
    overflow: 'hidden'
  },
  articleImg: {
    display: 'block',
    width: '100%',
    objectFit: 'cover',
  },
  articleNote: {
    position: 'absolute',
    fontFamily: 'Montserrat, sans-serif',
    width: '100%',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    transform: 'translate( -50%, -50% )',
    fontSize: '2rem',
    color: '#FFE5B4'
  },
  footer: {
    backgroundColor: '#ab936b',
    width: '100%',
  },
  footerImg: {
    width: '40%'
  }

}))

function App() {

  const classes = useStyles();

  return (
      <Box>
        <CornerOrnamental />

        <Navbar />

        <Box className={classes.hero}>
          <img className={classes.heroImg} 
            src={process.env.PUBLIC_URL+"/images/6.jpg"}
            alt="hero-img"
          />
          <div className={classes.heroHeader}>
            <h3>We're getting married!</h3>
          </div>
        </Box>

        <HeroNote />

        <div className={classes.avatarBoard}>
          <div className={classes.line1}>
            <Avatar 
              img = {process.env.PUBLIC_URL+"/images/7.jpg"}
            />
            <div className={classes.lineText}>
              <h2 className={classes.innerTextH2}>Ikechukwu Udochukwu Adindu</h2>
              <h6 className={`${classes.couple} ${classes.innerTextH6}`}>groom</h6>
              <h6 className={classes.innerTextH6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
            </div>
          </div>
          <FlutteringFlowers
            top="" 
            side="48%"
          />
          <div className={classes.line1}>
            <div className={classes.lineText}>
            <h2 className={classes.innerTextH2}>Chisomeje Roseline Nwatu</h2>
            <h6 className={`${classes.couple} ${classes.innerTextH6}`}>bride</h6>
            <h6 className={classes.innerTextH6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
          </div>
            <Avatar 
              img = {process.env.PUBLIC_URL+"/images/9.jpg"}
            />
          </div>
        </div>
      
        <div className={classes.article}>
          <img className={classes.articleImg} src={process.env.PUBLIC_URL+"/vectors/background.png"} alt="article-img" />
          <div className={classes.articleNote}>
            <Countdown />
          </div>
        </div>

        <Event />

        <div className={classes.footer}>
          <img className={classes.footerImg} src={process.env.PUBLIC_URL+"/vectors/floral_footer.svg"} alt="floral_footer" />
          {/* <h3 className={classes.footerNote}>© Hezee</h3> */}
        </div>

      </Box>
  );
}

export default App;
