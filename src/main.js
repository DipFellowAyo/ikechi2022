import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';

import App from './components/app';
import Photos from './photos';


import Loading from './loading';

const theme = createTheme();

// const Home = React.lazy(() => import('./components/App'))
// const Photos = React.lazy(() => import('./photos'))

function Main() {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route exact path="/" element={<App />} />
                        <Route exact path="/photos" element={<Photos />} />
                    </Routes>
                </Suspense>
            </HashRouter>
        </ThemeProvider>
    )
}

export default Main;