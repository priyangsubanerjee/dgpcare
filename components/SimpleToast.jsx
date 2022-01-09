import React from 'react'
import styles from '../styles/SimpleToast.module.css'
import * as BsIcons from 'react-icons/bs'

function SimpleToast({text}) {
    return (
        <div className={styles.toastCard}>
            <BsIcons.BsBookmarkHeart style={{color:'var(--white-primary)', marginRight:'10px', fontSize:'15px'}}/>{ text.length > 20 ? text.substring(0, 20) + '...' : text }
        </div>
    )
}

export default SimpleToast
