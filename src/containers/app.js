import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { BrowserRouter } from 'react-router-dom';

import Loading from '../components/loading';
import Myroutes from './routes';

const theme = createTheme();



function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <BrowserRouter>
                    <Suspense fallback={<Loading />}>
                        <Myroutes />
                    </Suspense>
                </BrowserRouter>
            </CssBaseline> 
        </ThemeProvider>
    )
}

export default App;