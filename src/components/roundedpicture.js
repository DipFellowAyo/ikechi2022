import React from 'react';
import Box from "@material-ui/core/Box";
// import { makeStyles } from '@mui/styles';


// const useStyles = makeStyles(theme => ({
  // roundedAvatar: {
  //   borderRadius: '50%',
  //   width: '40%',
  //   overflow: 'hidden',
  //   [theme.breakpoints.down("md")]: {
			
	// 	},
  //   [theme.breakpoints.down("sm")]: {
	// 		width: '100%',
  //     margin: '50px auto',
  //     borderRadius: '5%'
	// 	},
  // },
  // roundedImg: {
  //   width: '100%',
  //   objectFit: 'contain'
  // }
// }))

const Avatar = (props) => {

  // const classes = useStyles();

  return (
    <Box className='roundedAvatar'>
        <img className='roundedImg' src={props.img} alt="avatar" />
    </Box>
  )
};

export default Avatar;