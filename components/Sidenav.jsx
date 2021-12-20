import React from 'react'
import styles from '../styles/Sidenav.module.css'
import * as IoICons from 'react-icons/io5'
import * as GrIcons from 'react-icons/gr'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
import * as VscIcons from 'react-icons/vsc'
import Link from 'next/link'

function Sidenav({ setSidenav}) {


    return (
        <div className={styles.sidenav} onClick={(e) =>  e.target.className==styles.sidenav ? setSidenav(false): setSidenav}>
            <div className={styles.sidenavCard}>
                <div className={styles.sidenavCardHeader}>
                    <IoICons.IoCloseOutline className={styles.closeSidenav} onClick={() =>  setSidenav(false)}/>
                    <span className={styles.brand}>C-19 Resources</span>
                </div>

                <ul className={styles.sidenavCardLinks}>

                    <li className={styles.sidenavCardLink}>
                       <Link href='/docs/about'>
                            <a className={styles.parentLink} onClick={() => setSidenav(false)}>
                                <GrIcons.GrInfo className={styles.sidenavCardLinkIcon}/>
                                <span className={styles.sidenavCardLinkText}>About us</span>
                            </a>
                       </Link>
                    </li>

                    <li className={styles.sidenavCardLink}>
                       <Link href='/docs/about'>
                            <a className={styles.parentLink} onClick={() => setSidenav(false)}>
                                <MdIcons.MdOutlineBugReport className={styles.sidenavCardLinkIcon}/>
                                <span className={styles.sidenavCardLinkText}>Report an issue</span>
                            </a>
                       </Link>
                    </li>

                    <li className={styles.sidenavCardLink}>
                       <Link href='/docs/about'>
                            <a className={styles.parentLink} onClick={() => setSidenav(false)}>
                                <AiIcons.AiOutlineTeam className={styles.sidenavCardLinkIcon}/>
                                <span className={styles.sidenavCardLinkText}>Team members</span>
                            </a>
                       </Link>
                    </li>
                    
                    <li className={styles.sidenavCardLink}>
                       <Link href='/docs/about'>
                            <a className={styles.parentLink} onClick={() => setSidenav(false)}>
                                <VscIcons.VscBook className={styles.sidenavCardLinkIcon}/>
                                <span className={styles.sidenavCardLinkText}>Terms {'&'} Conditions</span>
                            </a>
                       </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidenav
