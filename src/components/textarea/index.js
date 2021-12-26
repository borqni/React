import React from 'react'
import styles from './index.module.css'

const Textarea = ({ label, id, placeholder }) => {
    return (
        <div className={styles.field}>
            <label htmlFor={id}> {label}: </label>
            <textarea htmlFor={id} placeholder={placeholder} />
        </div>
    )
}

export default Textarea