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
            {/* <p className="text">Esu darbštus, atsakingas, siekiantis tobulėti bei nebijantis iššūkių architektūros magistrantas, norintis persispecializuoti į IT sritį. Esu labai motyvuotas ugdyti savo žinias ir pradėti savo front-end karjerą. Greitai išmokstu dirbti naujomis programomis, prisitaikau prie aplinkos ir darbo procesų, o iškilus kliūtims ar sunkumams, visada randu sprendimą, nesvarbu kiek pastangų ar laiko tai reikalautų.
            </p>
            <p className='text'>Gebu sutarti su visais žmonėmis, mėgstu naujas pažintis. Taip pat, labai gerai sutariu su “Google” paieškos sistema, nes didžiają dalį gyvenimo teko spręsti įvairius nesklandumus su kompiuteriu, kitais prietaisais ar programine įranga. Visi mano hobiai liečia TECH sritį: kompiuteriniai žaidimai, išmanieji telefonai, stacionarūs bei nešiojami kompiuteriai, kriptovaliutos.</p> */}
            <p className="text">I used to be an architect with a masters degree, which has given me a deep understanding in design, composition and most importantly hard-work. Although I decided to change my profession, my studies and work in architecture made me <a className='' href='/about'>who I am today</a>.
            </p>
            <p className='text'>Pursuing a different profession was a hard decision to make, but I'm very glad that I did. Programming has become a passion of mine which in turn gave me a lot of motivation and determination to learn everyday. I look at myself now as a sponge, I am tirelessly driven to seek and absorb new information. </p>
            <p className='text'><b>I made this website to show of my abilities and tell a little bit about myself as a person. So scroll down to find out more!</b></p>

        </motion.div>

    )
}