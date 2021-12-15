import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as GoIcons from 'react-icons/go'
import * as VscIcons from 'react-icons/vsc'
import * as BsIcons from 'react-icons/bs'
import styles from '../styles/Topnav.module.css'
import Modal from '../components/LocationModal.jsx'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Sidenav from './Sidenav'

function Topnav() {

    const [modal, setModal] = useState(false)
    const [sidenav, setSidenav] = useState(false)

    const router = useRouter()

    const checkActivePah = (path) => {

        if (router.pathname === path) {
            return [styles.active, styles.navItem].join(' ')
        } else {
            return styles.navItem
        }
    }

    return (

        <div className={styles.topnav}>
            <AiIcons.AiOutlineMenu className={styles.menu} onClick={() => setSidenav(true)}/>
            <span className={styles.brand}>C-19 Resources</span>
            <span className={styles.location_flex} onClick={() => setModal(!modal)}>
                <BiIcons.BiMap className={styles.location} /> 
                <span className={styles.location_text}>Durgapur</span>
            </span>

            <div className={styles.navitems}>
                <Link href="/"><GoIcons.GoHome className={checkActivePah('/')}/></Link>
                <Link href="/savedResources"><BsIcons.BsBookmarkHeart className={checkActivePah('/savedResources')}/></Link>
                <Link href="/recentFeeds"><BsIcons.BsNewspaper className={checkActivePah('/recentFeeds')}/></Link>
                <Link href="/notifications"><VscIcons.VscBellDot className={checkActivePah('/notifications')}/></Link>
            </div>


            { sidenav && <Sidenav setSidenav={setSidenav} /> }
            {
                modal && <Modal setModal={setModal}/>
            }

        </div>
    )
}

export default Topnav
