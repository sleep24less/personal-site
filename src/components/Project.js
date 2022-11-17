import React from 'react'

function Project(props) {
    const style = {
        backgroundImage: `url(${props.img})`
    }
    return (
        <div className='grid_item' >
            <a href={props.url} target='_blank' rel='noreferrer'>
                <div className='project_card'>
                    <div className='project_img' style={style}></div>
                </div>
            </a>
            <div className='project_title'><a href={props.url} target='_blank' rel='noreferrer'>{props.title}</a><a href={props.github} target="_blank" rel='noreferrer'>
                <i className="fab fa-github"></i>
            </a></div>
        </div>
    )
}

export default Project