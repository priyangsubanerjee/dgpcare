import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as VscIcons from 'react-icons/vsc'
import * as BsIcons from 'react-icons/bs'
import styles from '../styles/Topnav.module.css'
import Modal from '../components/LocationModal.jsx'
import { useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Sidenav from './Sidenav'

function Topnav() {

    const [modal, setModal] = useState(false)
    const [sidenav, setSidenav] = useState(false)


    const[theme, setTheme] = useState(() => {

        if(typeof window !== 'undefined') {
            
            if(localStorage.getItem('theme')) {
                return localStorage.getItem('theme')
            }
            else {
                return 'light'
            }
        }else{

            return 'light'
        }
    })

    useEffect(() => {

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)

    }, [theme])


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
            <Link href="/"><a><span className={styles.brand}>C-19 Resources</span></a></Link>
            <span className={styles.location_flex} onClick={() => setModal(!modal)}>
                <BiIcons.BiMap className={styles.location} /> 
                <span className={styles.location_text}>Durgapur</span>
            </span>

            <div className={styles.navitems}>
                <Link href="/"><BiIcons.BiCategoryAlt title='Categories' className={checkActivePah('/')}/></Link>
                <Link href="/savedResources"><BsIcons.BsBookmarkHeart title='Saved Resources' className={checkActivePah('/savedResources')}/></Link>
                <Link href="/Feeds"><BsIcons.BsNewspaper title='Recent Feeds' className={checkActivePah('/Feeds')}/></Link>
                <Link href="/notifications"><VscIcons.VscBellDot title='Notifications' className={checkActivePah('/notifications')}/></Link>
            </div>


            { sidenav && <Sidenav setSidenav={setSidenav} theme={theme} setTheme={setTheme} /> }
            { modal && <Modal setModal={setModal}/> }

        </div>
    )
}

export default Topnav
