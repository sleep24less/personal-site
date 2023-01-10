import { motion } from 'framer-motion'
import Project from './Project'
import { nanoid } from 'nanoid'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'


export default function Work() {

    return (

        <motion.div className="container main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className='text_section'><i className="fa-solid fa-laptop-code"></i> My work</h1>
            <h1 className='text_intro'>All of these projects were done while learning front-end development.</h1>
            <p className='text'>Creating these projects helped me learn and solidify my new-found knowledge on HTML, CSS, JavaScript and React. This personal/portfolio website is my latest finished project created using React.</p>
            <div className='grid'>
                <Project
                    key={nanoid()}
                    img={project6}
                    title='REST Countries'
                    url='https://sleep24less.github.io/rest-countries/'
                    github='https://github.com/sleep24less/rest-countries' />
                <Project
                    key={nanoid()}
                    img={project7}
                    title='Pizza menu'
                    url='https://sleep24less.github.io/pizza-menu/'
                    github='https://github.com/sleep24less/pizza-menu' />
                <Project
                    key={nanoid()}
                    img={project1}
                    title='Library app'
                    url='https://sleep24less.github.io/library/'
                    github='https://github.com/sleep24less/library' />
                <Project
                    key={nanoid()}
                    img={project2}
                    title='Tenzies game'
                    url='https://sleep24less.github.io/tenzies-game/'
                    github='https://github.com/sleep24less/tenzies-game' />
                <Project
                    key={nanoid()}
                    img={project3}
                    title='Calculator app'
                    url='https://sleep24less.github.io/calculator/'
                    github='https://github.com/sleep24less/calculator' />
                <Project
                    key={nanoid()}
                    img={project4}
                    title='Etch-a-Sketch app'
                    url='https://sleep24less.github.io/etch-a-sketch/'
                    github='https://github.com/sleep24less/etch-a-sketch' />
                <Project
                    key={nanoid()}
                    img={project5}
                    title='Rock Paper Scissors game'
                    url='https://sleep24less.github.io/rock-paper-scissors/'
                    github='https://github.com/sleep24less/rock-paper-scissors' />
            </div>
        </motion.div>

    )
}