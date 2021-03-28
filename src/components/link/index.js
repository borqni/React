import React from 'react'

const NavElement = ({ title, href }) => {
    return (
        <a href={href}>{title}</a>
    )
}

export default NavElement