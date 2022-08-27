import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@mui/styles';
import HeroNote from "../components/heronote";
import Navbar from "../components/navbar";
import CornerOrnamental from "../components/cornerornamental";
import FlutteringFlowers from "../components/flutteringflowers";
import Avatar from "../components/roundedpicture";
import Countdown from "../components/countdown";
import Event from "../components/event";

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
    width: '55%',
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
    // padding: '3%',
    // backgroundColor: '#800020',
    // color: '#ab936b',
    marginTop: '-10px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9rem', 
    fontWeight: '500',
    lineHeight: '1.8',
    [theme.breakpoints.down("md")]: {
			lineHeight: '1.5',
		},
    [theme.breakpoints.down("sm")]: {
			fontSize: '0.7rem', 
      lineHeight: '1.4',
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
  },
  toast: {
    margin: 'auto',
    padding: '2%',
    minHeight: '400px',
    maxWidth: '550px',
    minWidth: '250px',
    background: '#f1f5f8',
    color: '#800020',
    backgroundImage: 'radial-gradient(#bfc0c1 7.2%, transparent 0)',
    backgroundSize: '25px 25px',
    borderRadius: '2rem',
    boxShadow: '4px 3px 7px 2px #00000040',
    [theme.breakpoints.down("md")]: {
			
		},
    [theme.breakpoints.down("sm")]: {
			minHeight: 'auto',
		},
  },
  // "@keyframes type": {
  //   "0%": {
  //     width: '0%'
  //   },
  //   "100%": {
  //     width: '100%'
  //   }
  // },
  // "@keyframes blink": {
  //   "0%, 100%": {
  //     borderRight: "2px solid transparent"
  //   },
  //   "50%": {
  //     borderRight: "2px solid #222"
  //   }
  // }
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
              <h6 className={`${classes.innerTextH6} ${classes.toast}`}><i>My Darling,<br /><br />
              I have pondered on the words which can fully encapsulate and deliver my feelings. If I could try, it would be excitement and serenity. <br /> 
              The excitement of what the future holds-all the moments, the journeys, the growth, the highs and the lows. I look forward to savoring every bit of these. <br /> 
              And the serenity that I have the best person at my side to go through all these together with. There's no person that I would want to through life's journey with-other than you. <br /> 
              I am glad that God sent you to me, in the time that he did-God's time is truly the best. I have seen the immense love you give and feel honoured to be worthy of it. You are the very best. A virtous woman. Proof that, truly, God dey create! <br />
              I look forward to forever, through all the smiles, tears, pain, growth, enjoyment, everything. I promise to be by your side through it all. It's you and I together, babyy. <br /></i>
              <strong>I love you, Ifunanyam!</strong></h6>
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
            <h6 className={`${classes.innerTextH6} ${classes.toast}`}><i>When I first met you, my focus was kept on you, consistently trying to solve the puzzle of who you are. <br />
            But Voila! as our love grew, I couldn't wait to see you again and be entertained by the chemistry we shared. <br />
            I like to think of our love as a rainbow that brightens both our lives and has a long lasting impression on those who witness it. <br />
            The DAY that seemed far-off has finally arrived and we are doing this, <br /><br />
            <strong>We are getting married!</strong><br /><br />
            I cannot wait to formally bond our love together in matrimony and call you My Husband. <br />
            I love you, My Darling. I've loved you for a thousand times before and I'll love you for a thousand more.</i> <br />
            <strong>See you at the altar, My Love 💗</strong></h6>
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
