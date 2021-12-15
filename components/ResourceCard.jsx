import React from 'react'
import styles from '../styles/ResourceCard.module.css'
import * as FiIcons from 'react-icons/fi'
import * as IoIcons from 'react-icons/io'
import * as IoIcons5 from 'react-icons/io5'
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'

function ResourceCard() {
    return (
        <div className={styles.resourceCard}>
            <FiIcons.FiCheckCircle className={styles.resourceProviderIcon}/>
            <span className={styles.resourceProviderName}>Lorem ipsum</span>
            <span className={styles.resourceProviderDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, esse?</span>
            <div className={styles.resourceActionFlex}>
                <IoIcons.IoMdCall className={styles.resourceCallButton}/>
                <HiIcons.HiOutlineMail className={styles.resourceMailButton}/>
                <IoIcons5.IoShareSocial className={styles.resourceShareButton}/>
                <BsIcons.BsBookmarkPlus className={styles.resourceBookmarkButton}/>
            </div>
        </div>
    )
}

export default ResourceCard
