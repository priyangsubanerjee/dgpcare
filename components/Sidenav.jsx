import React from 'react'
import styles from '../styles/Sidenav.module.css'
import * as IoICons from 'react-icons/io5'
import * as GrIcons from 'react-icons/gr'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
import * as VscIcons from 'react-icons/vsc'

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
                        <GrIcons.GrInfo className={styles.sidenavCardLinkIcon}/>
                        <span className={styles.sidenavCardLinkText}>About us</span>
                    </li>
                    <li className={styles.sidenavCardLink}>
                        <MdIcons.MdOutlineBugReport className={styles.sidenavCardLinkIcon}/>
                        <span className={styles.sidenavCardLinkText}>Report an issue</span>
                    </li>
                    <li className={styles.sidenavCardLink}>
                        <AiIcons.AiOutlineTeam className={styles.sidenavCardLinkIcon}/>
                        <span className={styles.sidenavCardLinkText}>Team members</span>
                    </li>
                    <li className={styles.sidenavCardLink}>
                        <VscIcons.VscBook className={styles.sidenavCardLinkIcon}/>
                        <span className={styles.sidenavCardLinkText}>Terms {'&'} Conditions</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidenav
