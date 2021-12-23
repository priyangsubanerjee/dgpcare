import React from 'react'
import styles from '../../styles/pages/TermsConditions.module.css'
import * as BiIcons from 'react-icons/bi'
import * as VscIcons from 'react-icons/vsc'

function TermsandConditions() {
    return (
        <div className={styles.container}>
            <div>
            <span className={styles.header}>
                <VscIcons.VscBook/>
                <span className={styles.header_text}>Privacy Policy</span>
            </span>
            <span className={styles.about}>Being a non-profit and a crowdsourced organization we are bound to some <span className={styles.highlightedLink}>Terms &amp; Conditions</span> to avoid any professional sins.</span>
            </div>

            <div className={styles.hr}></div>

            <div>
                <h1>Privacy Policy</h1>
                <p>Last updated: December 23, 2021</p>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.privacypolicies.com/blog/privacy-policy-template/"  rel="noreferrer" target="_blank">Privacy Policy Template</a>.</p>
                <h1>Interpretation and Definitions</h1>
                <h2>Interpretation</h2>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                
            </div>

            <a href="https://www.privacypolicies.com/live/a02085b7-136a-4c3c-b15c-87ff47d81005"><span className={styles.viewArticle}> View full article</span></a>

        </div>
    )
}

export default TermsandConditions
