import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { HashRouter } from 'react-router-dom';

// import Loading from '../components/loading';
import Myroutes from './routes';


// import App from './components/app';
// import Photos from './photos';


const theme = createTheme();



function Main() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <HashRouter>
                    <Suspense>
                        <Myroutes />
                    </Suspense>
                </HashRouter>
            </CssBaseline> 
        </ThemeProvider>
    )
}

export default Main;