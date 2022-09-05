import React from 'react';
import Box from "@material-ui/core/Box";
// import { makeStyles } from '@mui/styles';


// const useStyles = makeStyles(theme => ({
    // eventHeader: {
    //     fontFamily: 'Montserrat, sans-serif',
    //     fontWeight: '400',
    //     [theme.breakpoints.down("md")]: {
	// 		margin: '50px auto'
	// 	},
    //     [theme.breakpoints.down("sm")]: {
            
	// 	},
    // },
    // eventHeaderH2: {
    //     [theme.breakpoints.down("sm")]: {
    //         fontSize: '1.5rem',
	// 	},
    // },
    // eventSection: {
    //     width: '90%',
    //     margin: '0 auto 100px',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     [theme.breakpoints.down("md")]: {
	// 		display: 'grid',
    //         margin: '50px auto 100px',
	// 	},
    //     [theme.breakpoints.down("sm")]: {
            
	// 	},
    // },
    // column: {
    //     width: '20%',
    //     textAlign: 'center',
    //     [theme.breakpoints.down("md")]: {
	// 		width: '80%',
    //         margin: 'auto'
	// 	},
    //     [theme.breakpoints.down("sm")]: {
            
	// 	},
    // },
    // columnImg: {
    //     width: '90%',
    //     height: '100px'
    // },
    // columnH3: {
    //     fontFamily: 'Handlee, cursive',
    //     fontSize: '1.8rem',
    //     fontWeight: '400'
    // },
    // columnH4: {
    //     fontFamily: 'Montserrat, sans-serif',
    //     fontSize: '1rem', 
    //     fontWeight: '400'
    // },
    // map:{
    //     width: '60%',
    //     [theme.breakpoints.down("md")]: {
	// 		width: '100%',
    //         margin: '20px auto 50px'
	// 	},
    //     [theme.breakpoints.down("sm")]: {
            
	// 	}
    // },
    // imgBox: {
    //     backgroundColor: '#800020',
    //     width: '40%',
    //     margin: 'auto',
    //     borderRadius: '50%',
    //     border: '1px solid #ab936b',
    //     boxShadow: '2px 2px 2px 1px #ab936b',
    //     [theme.breakpoints.down("md")]: {
	// 		width: '25%'
	// 	},
    //     [theme.breakpoints.down("sm")]: {
            
	// 	}
    // }
// }))


const Event = () => {

    // const classes = useStyles();

  return (
    <Box>
        <div className='eventHeader'>
            <h2 className='eventHeaderH2'>EVENT DETAILS</h2>
            <h6>When & Where</h6>
        </div>

      <Box className='eventSection'>
        <div className='column'>
            <Box className='imgBox'>
                <img className='columnImg' src={process.env.PUBLIC_URL+"/vectors/ceremony.svg"} alt="ceremony-img" />
            </Box>
            <h3 className='columnH3'>CEREMONY</h3>
            <h4 className='columnH4'>September 24, 2022</h4>
            <h4 className='columnH4'><b>11am</b></h4>
            <br />
            <h4 className='columnH4'>ASSEMBLIES OF GOD CHURCH, Pinnock Estate, By Jakande Roundabout, Off Lekki-Epe Expressway, Lagos.</h4>
        </div>
        <div className='map'>
            <iframe 
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14512.777135976208!2d3.5127703944957425!3d6.4446397521698895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d6.4536177!2d3.508993!4m5!1s0x103bf7ef3ef62d1d%3A0x2dec484ca593e1d5!2sNovatel%20Hotel%2C%20Auto%20drive%2C%20Dr%20Udo%20Wogu%20Dr%2C%20Eti-Osa%20105102%2C%20Lekki!3m2!1d6.4400628!2d3.526094!5e0!3m2!1sen!2sng!4v1661300286551!5m2!1sen!2sng" 
                width="90%" 
                height="450" 
                style={{border:"2px solid #000000", borderRadius:"1rem", boxShadow: '1px 2px 2px 1px #ab936b'}}  
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div className='column'>
            <Box className='imgBox'>
                <img className='columnImg' src={process.env.PUBLIC_URL+"/vectors/reception.svg"} alt="reception-img" />
            </Box>
            <h3 className='columnH3'>RECEPTION</h3>
            <h4 className='columnH4'>September 24, 2022</h4>
            <h4 className='columnH4'><b>Follows Immediately</b></h4>
            <br />
            <h4 className='columnH4'>Novatel Hotel, Plateau Hall (6th Floor), Chevy View Estate, By Chevron Roundabout, Off Lekki-Epe Expressway, Lagos.</h4>
        </div>
      </Box>
    </Box>
  )
}

export default Event;