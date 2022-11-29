import React from 'react'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

import icon1 from '../assets/code.png'
import icon3 from '../assets/sent.png'
import homeImg1 from '../assets/homeImg1.png'
import SkillsSection from './SkillsSection'



// DON'T FORGET TO ADD SCROLL TO TOP FEATURE ON LINKS INSIDE TEXT OR FOOTER//

export default function Home() {
    // Initialization for animate on scroll effects//
    React.useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (

        <motion.div className="container main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className='text_intro home'>Hello, Arno here!</h1>
            <h1 className='text_title'><b className='text_gradient'>Front-End Developer</b><b>, specializing in </b><b className='text_gradient'>React.</b></h1>
            <p className="text">I used to be an architect with a masters degree, which has given me a deep understanding in design, composition and most importantly hard-work. Although I decided to change my profession, my studies and work in architecture made me <Link to='/about'>who I am today</Link>.
            </p>
            <p className='text'>Pursuing a different profession was a hard decision to make, but I'm very glad that I did. Programming has become a passion of mine which in turn gave me a lot of motivation and determination to learn everyday. I look at myself now as a sponge, I am tirelessly driven to seek and absorb new information. </p>
            <p className='text last'>I made this website to show of my abilities and tell a little bit about myself as a person. <b>So scroll down to find out more!</b></p>
            <div className='scroll_animation'>
                <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </div>
            <SkillsSection />
            <div className='section_info'>
                <div className='info' data-aos='fade-right'>
                    <img src={icon1} className='header_icon' alt=''></img>
                    <h1 className='text_section'>My work</h1>
                    <p className='text'>All of my projects are were made while learning on a free programming course called <a href='https://www.theodinproject.com/' target='_blank' rel='noreferrer'>The Odin Project</a>. I learned new things everyday and progressed my knowledge with each project I did.</p>
                    <p className='text'>My favorite part about these projects - there was no leading by the hand. Every given project there had a description on how it should work, some hints and a suggestion to "use Google" to figure things out.</p>
                </div>
                <div className='section_container about_work'>
                    <div data-aos='fade-right' className='left_section'>
                        <p className='text'><i className="fab fa-github"></i> sleep24less/personal-site</p>
                        <p className='text'><i className="fab fa-github"></i> sleep24less/library</p>
                        <p className='text'><i className="fab fa-github"></i> sleep24less/tenzies-game</p>
                        <p className='text'><i className="fab fa-github"></i> sleep24less/calculator</p>
                        <p className='text'><i className="fab fa-github"></i> sleep24less/rock-paper-scissors</p>
                        <p className='text'><i className="fab fa-github"></i> sleep24less/etch-a-sketch</p>
                        <Link to='/work' className='work_button'>See my work</Link>
                    </div>
                    <div data-aos='fade-left' className='right_section'>
                        <img src={homeImg1} className='home_img' alt='lines of code'></img>
                    </div>
                </div>
            </div>
            <div data-aos='fade-right' className='section_info'>
                <img src={icon3} className='header_icon' alt=''></img>
                <h1 className='text_section'>Get in Touch</h1>
                <p className='text'>I am currently open for job opportunities as a Front-End/React Developer. You can view my <a href='https://www.linkedin.com/in/arnomanukian/' target='_blank' rel='noreferrer'>LinkedIn</a> profile or download my resume. You can also find all of my code on my <a href='https://github.com/sleep24less' target='_blank' rel='noreferrer'>GitHub</a>.</p>
                <p className='text'>If you want to contact me, you're welcome to send an <a href="mailto:arnas.manucan@gmail.com" target="_blank" rel="noreferrer">Email</a> to <b>arnas.manucan@gmail.com</b> .</p>
            </div>
        </motion.div>

    )
}