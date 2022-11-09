import { motion } from 'framer-motion'


export default function Work() {

    return (

        <motion.div className="work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1>Work</h1>
        </motion.div>

    )
}