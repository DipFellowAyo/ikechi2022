import React from "react";
import { Routes, Route } from 'react-router-dom';


import {
    LANDING_ROUTE,
    PHOTOS_ROUTE
} from "../utils/routes";


const Home = React.lazy(() => import("../pages/home"))
const Photos = React.lazy(() => import("../pages/photos"))


const Myroutes = () => {
    return (
        <Routes>
            <Route exact path={LANDING_ROUTE} element={<Home />} />
            <Route exact path={PHOTOS_ROUTE} element={<Photos />} />
        </Routes>
    )
}


export default Myroutes;