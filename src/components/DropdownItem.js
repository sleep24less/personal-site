import React from 'react'

function DropdownItem(props) {
    return (
        <li className='dropdown_item'>
            <a
                href={props.link}
                target={!props.email && '_blank'}
                rel={!props.email && 'noreferrer'}
                className='dropdown_link'>{props.icon}</a>
        </li>
    )
}

export default DropdownItem