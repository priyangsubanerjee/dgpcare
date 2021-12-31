import React from 'react'
import styles from '../styles/Footer.module.css'
import * as BsIcons from 'react-icons/bs'
import * as FiIcons from 'react-icons/fi'

function Footer() {
    return (
        <div className={styles.footerCard}>
            <div className={styles.brandNameContainer}>
                <span className={styles.brandName}>Dgp Covid Resources</span>
                <span className={styles.brandUrl}>A Crowdsourced Initiative</span>

                <div className={styles.brandSocialIcons}>
                    <FiIcons.FiMail className={styles.socialIcon}/>
                    <BsIcons.BsFacebook className={styles.socialIcon}/>
                    <BsIcons.BsTwitter className={styles.socialIcon}/>
                    <BsIcons.BsInstagram className={styles.socialIcon}/>
                    <BsIcons.BsGithub className={styles.socialIcon}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
