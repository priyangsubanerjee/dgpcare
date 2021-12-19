import React from 'react'
import styles from '../styles/Notifications.module.css'
import * as VscIcons from 'react-icons/vsc'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import Link from 'next/link'
import Head from 'next/head'

function notifications() {
    return (

        <>
            <Head>
                <title>Notifications</title>
            </Head>

            <div className={styles.container}>
                <div>
                    <span className={styles.header}>
                        <VscIcons.VscBellDot style={{}}/>
                        <span className={styles.header_text}>Notifications</span>
                    </span>
                    <span className={styles.about}>All important notifications from site admin as well as concerned authorities.</span>
                </div>

                <div className={styles.search_flex}>
                        <HiIcons.HiSearch className={styles.search_icon} />
                        <input className={styles.search_input} type="text" placeholder="Search"/>
                        <BsIcons.BsBackspace className={styles.clearQuery}/>
                </div>
            </div>
        </>
    )
}

export default notifications
