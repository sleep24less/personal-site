import { motion } from 'framer-motion'

export default function About() {

    return (

        <motion.div className="container main about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className='text_section'><i className="fa-solid fa-circle-user"></i> About me</h1>
            <h1 className='text_intro'>I am a self-taught front-end developer, who is motivated to start his career in the industry.</h1>
            <a href='' className='resume_button'>Get my CV</a>
        </motion.div>

    )
}