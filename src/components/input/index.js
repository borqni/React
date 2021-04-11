import React from 'react'
import './index.module.css'

const formField = ({ title, placeholder }) => {
    return (
        <p className="field">
            <label for={title}>Име на рецептата:</label>
            <input type="text" id={title} name={title} placeholder={placeholder} />
        </p>
    )
}

export default formField