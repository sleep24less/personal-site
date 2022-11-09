import { motion } from 'framer-motion'


export default function Home() {

    return (

        <motion.div className="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1 className='text_title'>Hello, I am Arno!</h1>
            <h1 className='text_intro'>I am a self-taught front-end developer, who is determined and ambitious to start my career in the IT industry.</h1>
            <p className="text">Esu darbštus, atsakingas, siekiantis tobulėti bei nebijantis iššūkių architektūros magistrantas, norintis persispecializuoti į IT sritį. Esu labai motyvuotas ugdyti savo žinias ir pradėti savo front-end karjerą. Greitai išmokstu dirbti naujomis programomis, prisitaikau prie aplinkos ir darbo procesų, o iškilus kliūtims ar sunkumams, visada randu sprendimą, nesvarbu kiek pastangų ar laiko tai reikalautų.
            </p>
            <p className='text'>Gebu sutarti su visais žmonėmis, mėgstu naujas pažintis. Taip pat, labai gerai sutariu su “Google” paieškos sistema, nes didžiają dalį gyvenimo teko spręsti įvairius nesklandumus su kompiuteriu, kitais prietaisais ar programine įranga. Visi mano hobiai liečia TECH sritį: kompiuteriniai žaidimai, išmanieji telefonai, stacionarūs bei nešiojami kompiuteriai, kriptovaliutos.</p>
        </motion.div>

    )
}