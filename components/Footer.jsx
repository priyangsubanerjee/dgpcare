import React from 'react'
import styles from '../styles/Footer.module.css'
import * as BsIcons from 'react-icons/bs'
import * as FiIcons from 'react-icons/fi'
import { useState } from 'react'
import SimpleToast from './SimpleToast'

function Footer() {

    const [toast, setToast] = useState(false)
    return (
        <div className={styles.footerCard}>
            <div className={styles.brandNameContainer}>
                <span className={styles.brandName}>Dgp Covid Resources</span>
                <span className={styles.brandUrl}>A Crowdsourced Initiative <a className={styles.footerMail} href="">| dgpcovidresources@gmail.com</a> </span>

                <div className={styles.brandSocialIcons}>
                    <a rel='noopener noreferrer' target={"_blank"} title='Open email' href="mailto:dgpcovidresources@gmail.com"><FiIcons.FiMail className={styles.socialIcon}/></a>
                    <FiIcons.FiFacebook onClick={() => setToast(true)} title='Page not ready' className={styles.socialIcon}/>
                    <FiIcons.FiTwitter onClick={() => setToast(true)} title='Page not ready' className={styles.socialIcon}/>
                    <a rel='noopener noreferrer' target={"_blank"} title='Visit instagram' href="https://instagram.com/dgp_covid_resource"><BsIcons.BsInstagram className={styles.socialIcon}/></a>
                    <a rel='noopener noreferrer' target={"_blank"} title='View github' href="https://github.com/priyangsubanerjee/dgpcare"><BsIcons.BsGithub className={styles.socialIcon}/></a>
                </div>

                {
                    toast && <SimpleToast props={ {text:"Page not ready yet.", type: "alert", setToast}} /> 
                }
                
            </div>
        </div>
    )
}

export default Footer
