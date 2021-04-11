import React from 'react'
import './index.module.css'

const LinkElement = ({ title, href }) => {
    return (
        <a href={href} >{title}</a>
    )
}

export default LinkElement