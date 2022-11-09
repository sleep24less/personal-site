import { motion } from 'framer-motion'


export default function Contact() {

    return (

        <motion.div className="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1>Contact</h1>
        </motion.div>

    )
}