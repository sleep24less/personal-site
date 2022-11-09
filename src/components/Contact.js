import { motion } from 'framer-motion'


export default function Contact() {

    return (

        <motion.div className="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1 className='text_section'><i class="fa-regular fa-paper-plane"></i> My contacts</h1>
        </motion.div>

    )
}