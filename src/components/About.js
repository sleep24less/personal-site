import { motion } from 'framer-motion'

export default function About() {

    return (

        <motion.div className="container main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className='text_section'><i class="fa-solid fa-circle-user"></i> About me</h1>
        </motion.div>

    )
}