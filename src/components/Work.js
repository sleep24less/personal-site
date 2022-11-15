import { motion } from 'framer-motion'


export default function Work() {

    return (

        <motion.div className="container main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className='text_section'><i className="fa-solid fa-laptop-code"></i> My work</h1>
            <h1 className='text_intro'>Hello</h1>
        </motion.div>

    )
}