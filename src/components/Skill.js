import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Skill(props) {

    // Initialization for animate on scroll effects//
    React.useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className='skill_container' >
            <p className='skill_name' data-aos='fade-right'>{props.name}</p>
            <div className='skill' data-aos='fade-left'>
                <div
                    className='bar'
                    style={{ width: props.width + '%' }}></div>
            </div>
        </div>
    )
}

export default Skill