import React from 'react'
import styles from '../styles/Footer.module.css'
import * as BsIcons from 'react-icons/bs'
import * as FiIcons from 'react-icons/fi'

function Footer() {
    return (
        <div className={styles.footerCard}>
            <div className={styles.brandNameContainer}>
                <span className={styles.brandName}>Dgp Covid Resources</span>
                <span className={styles.brandUrl}>A Crowdsourced Initiative <a className={styles.footerMail} href="">| dgpcovidresources@gmail.com</a> </span>

                <div className={styles.brandSocialIcons}>
                    <a rel='noopener noreferrer' target={"_blank"} href="mailto:dgpcovidresources@gmail.com"><FiIcons.FiMail className={styles.socialIcon}/></a>
                    <FiIcons.FiFacebook style={{opacity:'0.5', cursor:'not-allowed'}} className={styles.socialIcon}/>
                    <FiIcons.FiTwitter style={{opacity:'0.5', cursor:'not-allowed'}} className={styles.socialIcon}/>
                    <a rel='noopener noreferrer' target={"_blank"} href="https://instagram.com/dgp_covid_resource"><BsIcons.BsInstagram className={styles.socialIcon}/></a>
                    <a rel='noopener noreferrer' target={"_blank"} href="https://github.com/priyangsubanerjee"></a><BsIcons.BsGithub className={styles.socialIcon}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
