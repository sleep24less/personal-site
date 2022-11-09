import { motion } from 'framer-motion'

export default function About() {

    return (

        <motion.div className="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1>About</h1>
        </motion.div>

    )
}