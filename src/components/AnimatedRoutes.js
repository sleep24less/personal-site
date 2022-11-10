import React from 'react'
import Home from "./Home"
import Work from "./Work"
import About from "./About"
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes