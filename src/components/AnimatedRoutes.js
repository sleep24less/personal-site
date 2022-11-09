import React from 'react'
import Home from "../components/Home"
import Work from "../components/Work"
import About from "../components/About"
import Contact from "../components/Contact"
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
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes