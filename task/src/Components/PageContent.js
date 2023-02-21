import React from 'react'
import {Route, Routes} from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

function PageContent() {
    return (
        <Routes>
        <Route path="/home" element={<Home/> } />
        <Route path="/about" element={<About/> } />
        <Route path="/contact" element={<Contact/> } />
        </Routes>  
    )
}
export default PageContent
