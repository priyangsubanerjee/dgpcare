import React from 'react'
import styles from '../../styles/pages/ImportantLinks.module.css'
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'
import Footer from '../../components/Footer'
import LinksCard from '../../components/LinksCard'

function ImportantLinks() {
    return (
        <div className={styles.container}>

            <div>
                <span className={styles.header}>
                    <GiIcons.GiLinkedRings/>
                    <span className={styles.header_text}>Important Links</span>
                </span>
                <span className={styles.about}>If you need any kind of <span className={styles.highlightedLink}>help</span> from us, or if you want to <span className={styles.highlightedLink}>report an issue,</span> then please leave it below. We&apos;ll respond asap.</span>
                <div className={styles.hr}></div>
            </div>

            <div className={styles.linksContainer}>
                <LinksCard title={"Instagram"} description={"Make sure you follow our instagram page to get latest notifications !"} link={'https://instagram.com/dgp_covid_resource'}/>
            </div>
            

            <Footer/>
            
        </div>
    )
}

export default ImportantLinks
