import React from 'react'
import styles from './index.module.css'

const Textarea = ({ label, id, value, onChange, type }) => {
    return (
        <div className={styles.field}>
            <label htmlFor={id}>{label}:
                <textarea for={id} placeholder={placeholder} />
            </label>
        </div>
    )
}

export default Textarea