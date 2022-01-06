import React from 'react'
import styles from '../styles/TeamMemberCard.module.css'
import * as FiIcons from 'react-icons/fi'

function TeamMemberCard({props}) {

    console.log(props)
    return (
        <div className={styles.TeamMemberCard}>
                <img className={styles.profileImage} src={props.image != null ? props.image.url : "https://media.graphcms.com/6UMMG0gKR1yKqiMXvD0v"}/>
                <div className={styles.aboutProfile}>
                    <h3 className={styles.profileName}>{props.name}</h3>
                    <p className={styles.profileDescription}>{props.description}</p>
                    <div className={styles.socialFlex}>
                        { props.linkedin && <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><FiIcons.FiLinkedin className={styles.socialIcon} style={{color: "var(--blue-primary)"}}/></a> }
                        { props.twitter && <a href={props.twitter} target="_blank" rel="noopener noreferrer"><FiIcons.FiTwitter className={styles.socialIcon } style={{color: "var(--blue-primary)"}}/></a> }
                        { props.instagram && <a href={props.instagram} target="_blank" rel="noopener noreferrer"><FiIcons.FiInstagram className={styles.socialIcon} style={{color: "var(--red-primary)"}}/></a> }
                        { props.github && <a href={props.github} target="_blank" rel="noopener noreferrer"><FiIcons.FiGithub className={styles.socialIcon} style={{color: "var(--blue-primary)"}}/></a> }
                    </div>
                </div>
        </div>
    )
}

export default TeamMemberCard
