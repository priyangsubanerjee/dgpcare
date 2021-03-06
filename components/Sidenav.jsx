import React from 'react'
import styles from '../styles/Sidenav.module.css'
import * as IoICons from 'react-icons/io5'
import * as BsIcons from 'react-icons/bs'
import * as GrIcons from 'react-icons/gr'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'
import * as VscIcons from 'react-icons/vsc'
import * as FiIcons from 'react-icons/fi'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { logEvent } from '../analytics/firebase'
import { useRouter } from 'next/router'

function Sidenav({ setSidenav, theme, setTheme}) {

    const router = useRouter();

    function handleTheme() {

        theme === 'light' ? setTheme('dark') : setTheme('light');
        theme === 'light' ? logEvent("themeSwitch_dark", {

            path: router.pathname,
            date: new Date().toLocaleString(),

        }) : logEvent("themeSwitch_light", {

            path: router.pathname,
            date: new Date().toLocaleString(),
        })
    }
    
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
                                <AiIcons.AiOutlineBulb className={styles.sidenavCardLinkIcon}/>
                                <span className={styles.sidenavCardLinkText}>About us</span>
                            </a>
                       </Link>
                    </li>

                    <li className={styles.sidenavCardLink}>
                       <Link href='/docs/TeamMembers'>
                            <a className={styles.parentLink} onClick={() => setSidenav(false)}>
                                <AiIcons.AiOutlineTeam className={styles.sidenavCardLinkIcon}/>
                                <span className={styles.sidenavCardLinkText}>Team members</span>
                            </a>
                       </Link>
                    </li>

                    <li className={styles.sidenavCardLink}>
                       <Link href='/docs/ImportantLinks'>
                            <a className={styles.parentLink} onClick={() => setSidenav(false)}>
                                <GiIcons.GiLinkedRings className={styles.sidenavCardLinkIcon}/>
                                <span className={styles.sidenavCardLinkText}>Important links</span>
                            </a>
                       </Link>
                    </li>
                    
                    <li className={styles.sidenavCardLink}>
                       <Link href='/docs/PrivacyPolicy'>
                            <a className={styles.parentLink} onClick={() => setSidenav(false)}>
                                <VscIcons.VscBook className={styles.sidenavCardLinkIcon}/>
                                <span className={styles.sidenavCardLinkText}>Privacy policy</span>
                            </a>
                       </Link>
                    </li>

                    <li className={styles.sidenavCardLink}>
                       <Link href='/docs/contactUs'>
                            <a className={styles.parentLink} onClick={() => setSidenav(false)}>
                                <BiIcons.BiSupport className={styles.sidenavCardLinkIcon}/>
                                <span className={styles.sidenavCardLinkText}>Contact us</span>
                            </a>
                       </Link>
                    </li>

                    <li className={styles.sidenavCardLink} onClick={() => handleTheme()}>
                        <a className={styles.parentLink}>
                            {
                                theme === 'light' ? <BiIcons.BiMoon className={styles.sidenavCardLinkIcon}/> : <BiIcons.BiSun className={styles.sidenavCardLinkIcon}/> 
                            }
                            <span className={styles.sidenavCardLinkText}>{theme=="light"?"Dark":"Light"} mode</span>
                        </a>
                    </li>


                    <li className={styles.sidenavCardLink}>
                        <a href='https://anyratings.vercel.app/rate/hokzzck05pbw5ewjvzfhs' target={'_blank'} rel='noopener noreferrer' className={styles.parentLink}>
                            <AiIcons.AiOutlineStar className={styles.sidenavCardLinkIcon}/><span className={styles.sidenavCardLinkText}>Rate us</span>
                        </a>
                    </li>

                </ul>
                
                <div className={styles.installApp} onClick={() => {

                    logEvent("installApp_clicked", {

                        path: router.pathname,
                        date: new Date().toLocaleString(),
                    })

                }}>

                    <a rel='noopener noreferrer' target={"_blank"}  href="https://drive.google.com/file/d/1-R9r2qo-LryrS-ce7bjqclEBnyEpXfvx/view?usp=sharing">
                        <div className={styles.details}>
                            <p className={styles.detailsHead}>Install app ?</p>
                            <p className={styles.detailsbody}>You can install this page as an app and get seamless performance throughout.</p>
                            <p className={styles.detailsLink}>Learn how <FiIcons.FiExternalLink className={styles.openDetailsLink}/></p>
                        </div>
                    </a>
                
                </div>
            </div>
        </div>
    )
}

export default Sidenav
