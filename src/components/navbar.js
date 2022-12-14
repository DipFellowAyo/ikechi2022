import React from "react";
import Box from "@material-ui/core/Box";
// import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


// const useStyles = makeStyles(theme => ({
    // navbar: {
    //     padding: '0.5% 0',
    //     textAlign: 'center',
    //     backgroundColor: 'opaque'
    // },
    // navlist: {
    //     listStyleType: 'none',
    //     display: 'inline-block',
    //     margin: '5px 10px'
    // },
    // link: {
    //     color: '#333',
    //     textDecoration: 'none',
    //     display: 'inline-block',
    //     position: 'relative',
    //     "&:after": {
    //         content: '""',
    //         display: 'block',
    //         margin: 'auto',
    //         height: '3px',
    //         width: '0',
    //         top: '5px',
    //         background: 'transparent',
    //         transition: 'all 0.3s'
    //     },
    //     "&:hover": {
    //         "&::after": {
    //             width: '100%',
    //             background: '#800020',
    //         }
    //     }
    // },
    // activeNav: {
    //     "&::after": {
    //         width: '100%',
    //         background: '#800020',
    //     }
    // }

// }))

function Navbar() {

    // const classes = useStyles();

    return (
        <Box className='navbar'>
                <div>
                    <Link to="/">
                        <div className='navlist'>
                            <span className='link activeNav'>Home</span>
                        </div>
                    </Link>
                    <Link to="/photos">
                        <div className='navlist'>
                            <span className='link'>Photos</span>
                        </div>
                    </Link>
                </div>
        </Box>
    )
}

export default Navbar;