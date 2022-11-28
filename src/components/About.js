import React from 'react'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Skill from './Skill'

import profilePicture from '../assets/profile_picture.jpg'
import icon3 from '../assets/sent.png'
import icon4 from '../assets/mouse.png'
import CV from '../assets/arno_manukian_cv.rar'

export default function About() {

    // Initialization for animate on scroll effects//
    React.useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (

        <motion.div className="container main about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className='text_section'><i className="fa-solid fa-circle-user"></i> About me</h1>
            <h1 className='text_intro'>I am a self-taught front-end developer, who is motivated to start his career in the industry.</h1>
            <a href={CV} className='resume_button' download>Get my CV</a>
            <div className='about_stats'>
                <div className='about_stats_item'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Lithuania, Vilnius</p>
                </div>
                <div className='about_stats_item'>
                    <i className="fa-solid fa-comments"></i>
                    <p>Lithuanian, English, Russian</p>
                </div>
                <div className='about_stats_item'>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <p>Master Degree</p>
                </div>
            </div>
            <img src={profilePicture} alt='Arno Manukian' className='profile_picture'></img>
            <p className='text'>I am hard-working, responsible, always seeking for self-improvement and never afraid of challenges. I have a masters degree in architecture but decided to re-specialize to the IT field. I am highly motivated to further develop my knowledge and can't wait to start my front-end career. I learn fairly quick and can manage to adapt to any new environments and work processes. When obstacles or difficulties arise, I always find a solution, no matter how much effort or time it requires.</p>
            <p data-aos='fade-left' className='text last'>I enjoy meeting new people and can get along with pretty much anybody. I also get along with the Google search system, because most of my life I had to deal with various problems with the computer, other devices or software issues. All my hobbies come from the TECH industry: computer games, smartphones, PCs and laptops, including their accessories.</p>
            <div className='section_info'>
                <div data-aos='fade-right'>
                    <img src={icon4} className='header_icon' alt=''></img>
                    <h1 className='text_section'>My skills</h1>
                </div>
                <div className='skills'>
                    <Skill width='80' name='Photoshop' />
                    <Skill width='65' name='HTML' />
                    <Skill width='50' name='CSS' />
                    <Skill width='40' name='JavaScript' />
                    <Skill width='40' name='React.js' />
                    <Skill width='40' name='Git' />
                </div>
            </div>
            <div data-aos='fade-right' className='section_info'>
                <img src={icon3} className='header_icon' alt=''></img>
                <h1 className='text_section'>Get in Touch</h1>
                <p className='text'>I am currently open for job opportunities. You can view my <a href='https://www.linkedin.com/in/arnomanukian/' target='_blank' rel='noreferrer'>LinkedIn</a> profile or download my resume. You can also find all of my code on my <a href='https://github.com/sleep24less' target='_blank' rel='noreferrer'>GitHub</a>.</p>
                <p className='text'>If you want to contact me, you're welcome to send an <a href="mailto:arnas.manucan@gmail.com" target="_blank" rel="noreferrer">Email</a> to <b>arnas.manucan@gmail.com</b> .</p>
            </div>
        </motion.div>

    )
}