import React from 'react'
import styles from '../styles/TeamMemberCard.module.css'
import * as FiIcons from 'react-icons/fi'

function TeamMemberCard() {
    return (
        <div className={styles.TeamMemberCard}>
                <img className={styles.profileImage} src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"/>
                <div className={styles.aboutProfile}>
                    <h3 style={{margin:'0', color: "var(--blue-primary)"}}>Joseph</h3>
                    <p style={{margin:'5px 0 0 0', fontSize:'13px'}}>Lorem ipsum dolor sit.</p>
                    <div className={styles.socialFlex}>
                        <a href=""><FiIcons.FiLinkedin className={styles.socialIcon} style={{color: "var(--blue-primary)"}}/></a>
                        <a href=""><FiIcons.FiGithub className={styles.socialIcon} style={{color: "var(--blue-primary)"}}/></a>
                        <a href=""><FiIcons.FiInstagram className={styles.socialIcon} style={{color: "var(--red-primary)"}}/></a>
                        <a href=""><FiIcons.FiTwitter className={styles.socialIcon} style={{color: "var(--blue-primary)"}}/></a>
                    </div>
                </div>
        </div>
    )
}

export default TeamMemberCard
