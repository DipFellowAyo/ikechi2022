import React from 'react';
import "./app.css";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Navbar from '../src/components/navbar';
// import { createTheme } from '@mui/material/styles';
// import { ThemeProvider } from '@mui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import {
    LANDING_ROUTE,
    PHOTOS_ROUTE
} from "./utils/routes";

// import Loading from '../components/loading';
// import Myroutes from './routes';

// const theme = createTheme({

// });


const Home = loadable(() => import("./pages/home"));
const Photos = loadable(() => import("./pages/photos"));

function App() {
    return (
        // <ThemeProvider theme={theme}>
            // <CssBaseline>
                <BrowserRouter>
                    {/* <Navbar /> */}
                    <Routes>
                        <Route exact path={LANDING_ROUTE} element={<Home />} />
                        <Route exact path={PHOTOS_ROUTE} element={<Photos />} />
                    </Routes>
                </BrowserRouter>
            // </CssBaseline> 
        // </ThemeProvider>
    )
}

export default App;