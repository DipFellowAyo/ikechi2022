import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { BrowserRouter } from 'react-router-dom';

import Loading from '../components/loading';
import Myroutes from './routes';

// import App from './components/app';
// import Photos from './photos';


const theme = createTheme();



function Main() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <BrowserRouter basename='ikechi2022'>
                    <Suspense fallback={<Loading />}>
                        <Myroutes />
                    </Suspense>
                </BrowserRouter>
            </CssBaseline> 
        </ThemeProvider>
    )
}

export default Main;