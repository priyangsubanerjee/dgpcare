import React from 'react'
import styles from '../styles/SimpleToast.module.css'

function SimpleToast({text}) {
    return (
        <div className={styles.toastCard}>
            {text}
        </div>
    )
}

export default SimpleToast
