import React from 'react'
import styles from '../styles/SimpleToast.module.css'
import * as BsIcons from 'react-icons/bs'

function SimpleToast({text}) {
    return (
        <div className={styles.toastCard}>
            <BsIcons.BsBookmarkHeart style={{color:'white', marginRight:'10px', fontSize:'15px'}}/>{text}
        </div>
    )
}

export default SimpleToast
