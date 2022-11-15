import React from 'react'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Home() {
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
            <h1 className='text_title'>Hello, I am Arno!</h1>
            <h1 className='text_intro'>I am a self-taught front-end developer, who is motivated to start his career in the industry.</h1>
            <p className="text">I used to be an architect with a masters degree, which has given me a deep understanding in design, composition and most importantly hard-work. Although I decided to change my profession, my studies and work in architecture made me <a className='' href='/about'>who I am today</a>.
            </p>
            <p className='text'>Pursuing a different profession was a hard decision to make, but I'm very glad that I did. Programming has become a passion of mine which in turn gave me a lot of motivation and determination to learn everyday. I look at myself now as a sponge, I am tirelessly driven to seek and absorb new information. </p>
            <p className='text'>I made this website to show of my abilities and tell a little bit about myself as a person. <b>So scroll down to find out more!</b></p>
            <div className='scroll_animation'>
                <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </div>
            <div className='section_info'>
                <h1 data-aos='fade-left' className='text_section'><i className="fa-solid fa-laptop-code"></i> My work</h1>
                <p data-aos='fade-right' className='text'>All of my projects are were made while learning on a free programming course called <a href='https://www.theodinproject.com/' target='_blank' rel='noreferrer'>The Odin Project</a>. I learned new things everyday and progressed my knowledge with each project I did.</p>
                <p data-aos='fade-left' className='text'>My favorite part about these projects - there was no leading by the hand. Every given project there was a description on how it should look like and work, some hints and a suggestion to "use Google" to figure things out. You can check them out <a href='/work'>here!</a></p>
            </div>
        </motion.div>

    )
}