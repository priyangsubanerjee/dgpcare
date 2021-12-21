import React from 'react'
import styles from '../styles/Banner.module.css'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'

function Banner({setBanner}) {
    return (
        <div className={styles.bannerCard}>
            <BsIcons.BsStars/>
            <span className={styles.bannerText}>Revalidating resources</span>
            <span className={styles.learnMore}>Learn more <BsIcons.BsArrowRightShort style={{fontSize:'23px'}}/></span>
            <AiIcons.AiOutlineCloseCircle className={styles.closeBanner} onClick={() => setBanner(false)}/>
        </div>
    )
}

export default Banner
