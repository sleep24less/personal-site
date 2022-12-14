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
        Aos.init({
            duration: 1000,
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            }
        })
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
            <p className="text">As a former architect with a master's degree, I have a strong foundation in design, composition, and most importantly hard work. While I may have decided to change my profession, my studies and work in architecture made me <Link to='/about'>who I am today</Link>.
            </p>
            <p className='text'>Pursuing a different profession was a hard decision to make, but I am grateful that I did. I have found a passion for programming, which has fueled my drive and determination to learn every day. I see myself as a sponge, constantly seeking out new information and knowledge.</p>
            <p className='text last'>I created this website to showcase my skills and provide a glimpse into my personal journey. <b>Feel free to explore and learn more about me.</b></p>
            <div className='scroll_animation'>
                <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </div>
            <SkillsSection />
            <div className='section_info'>
                <div className='info' data-aos='fade-up'>
                    <img src={icon1} className='header_icon' alt=''></img>
                    <h1 className='text_section'>My work</h1>
                    <p className='text'>All of my projects were completed during my time learning on <a href='https://www.theodinproject.com/' target='_blank' rel='noreferrer'>The Odin Project</a>, a free programming course. I learned something new every day and gained valuable knowledge with each project I tackled.</p>
                    <p className='text'>What I enjoyed most about these projects was the lack of hand-holding. Each project came with a description of its desired functionality, a few hints, and the suggestion to "use Google" to figure out the rest. This approach allowed me to truly test and expand my problem-solving skills.</p>
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
            <div data-aos='fade-up' className='section_info'>
                <img src={icon3} className='header_icon' alt=''></img>
                <h1 className='text_section'>Get in Touch</h1>
                <p className='text'>I am currently open for job opportunities as a Front-End/React Developer. You can view my <a href='https://www.linkedin.com/in/arnomanukian/' target='_blank' rel='noreferrer'>LinkedIn</a> profile or download my resume. You can also find all of my code on my <a href='https://github.com/sleep24less' target='_blank' rel='noreferrer'>GitHub</a>.</p>
                <p className='text'>If you want to contact me, you're welcome to send an <a href="mailto:arnas.manucan@gmail.com" target="_blank" rel="noreferrer">Email</a> to <b>arnas.manucan@gmail.com</b> .</p>
            </div>
        </motion.div >

    )
}