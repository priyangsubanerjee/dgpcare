import React from 'react'
import styles from '../styles/NotificationCard.module.css'
import * as VscIcons from 'react-icons/vsc'
import * as BiIcons from 'react-icons/bi'

function NotificationCard({notification}) {
    
    function getDate(time) {

        console.log(new Date(time).toLocaleDateString())
        return new Date(time).toLocaleDateString()
    }

    function getTimeMinutes(time) {

        return new Date(time).toLocaleTimeString().substring(0, 5)
    }

    return (
        <div className={styles.notificationCard}>
            <div className={styles.notificationCardHeader}>
                <VscIcons.VscBellDot style={{color:'var(--black-primary)'}}/>
                <span className={styles.notificationsDate}>{getDate(notification.createdAt)}</span>
                <span className={styles.notificationsTime}>{getTimeMinutes(notification.createdAt)} Hrs</span>
                <span className={styles.notificationSource}>Admin</span>
            </div>
            <span className={styles.notificationHeading}>{notification.title}</span>
            <span className={styles.notificationBody}>{notification.content}</span>
            
            {
                notification.url != null && <button className={styles.notificationlink}><BiIcons.BiLinkAlt/> &nbsp; Open</button>
            }
            
        </div>
    )
}

export default NotificationCard
