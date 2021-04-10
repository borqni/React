import React from 'react'

const LinkElement = ({ title, href }) => {
    return (
        <a href={href} >{title}</a>
    )
}

export default LinkElement