import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function SkillsSection() {
    // Initialization for animate on scroll effects//
    React.useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='section_info skills'>
            <div className='info skills'>
                <div className='aos_container skills' data-aos='fade-up'>
                    <h1 className='text_section skills'>SKILLS</h1>
                </div>
                <h1 className='text_intro' data-aos='fade-up'>
                    Developer that solves problems, one line at a time.
                </h1>
                <div className='skills_container'>
                    <div
                        className='skill'
                        data-aos='fade-up'
                        data-aos-delay='0'
                    >
                        <i className='fa-solid fa-handshake skill_icon'></i>
                        <h1 className='skill_intro'>What I can do for you</h1>
                        <p className='text'>
                            Develop top-notch products that your users love.
                            Here are some qualities I bring:
                        </p>
                        <ul className='skill_list'>
                            <li className='text list_item'>
                                Deliver a great user experience
                            </li>
                            <li className='text list_item'>
                                Promote a growth mindset
                            </li>
                            <li className='text list_item'>
                                Work with agile processes
                            </li>
                        </ul>
                    </div>
                    <div
                        className='skill'
                        data-aos='fade-up'
                        data-aos-delay='300'
                    >
                        <i className='fa-solid fa-shapes skill_icon'></i>
                        <h1 className='skill_intro'>Things I'm skilled in</h1>
                        <p className='text'>
                            Every developer needs the right tools to do the
                            perfect job. Thankfully, I'm multilingual:
                        </p>
                        <ul className='skill_list'>
                            <li className='text list_item'>React.js</li>
                            <li className='text list_item'>HTML5, CSS3, JS</li>
                            <li className='text list_item'>
                                Knowledge of REST API
                            </li>
                            <li className='text list_item'>
                                Git versioning system
                            </li>
                        </ul>
                    </div>
                    <div
                        className='skill'
                        data-aos='fade-up'
                        data-aos-delay='600'
                    >
                        <i className='fa-solid fa-user-tie skill_icon'></i>
                        <h1 className='skill_intro'>What can you expect</h1>
                        <p className='text'>
                            I'm a problem-solver who is eager and motivated to
                            learn new skills. I am always dedicated to what I
                            do:
                        </p>
                        <ul className='skill_list'>
                            <li className='text list_item'>
                                Clean and functional code
                            </li>
                            <li className='text list_item'>
                                MVP-focused coding mindset
                            </li>
                            <li className='text list_item'>
                                A strong team-player
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;
