import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route exact path="/ikechi2022" element={<App />} />
                        <Route exact path="/ikechi2022/photos" element={<Photos />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Main;