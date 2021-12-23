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
                <span className={styles.header_text}>Terms &amp; Conditions</span>
            </span>
            <span className={styles.about}>Being a non-profit and a crowdsourced organization we are bound to some <span className={styles.highlightedLink}>Terms &amp; Conditions</span> to avoid any professional sins.</span>
            </div>

            <div className={styles.termsContainer}>
                <h2 className={styles.termsHeader}>Terms</h2>
                <ul className={styles.termsUl}>
                    <li className={styles.termsLi}>Lorem ipsum dolor sit amet.</li>
                    <li className={styles.termsLi}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, corrupti.</li>
                    <li className={styles.termsLi}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, corrupti.</li>
                    <li className={styles.termsLi}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, corrupti.</li>
                </ul>
            </div>

            <div className={styles.termsContainer}>
                <h2 className={styles.termsHeader}>Conditions</h2>
                <ul className={styles.termsUl}>
                    <li className={styles.termsLi}>Lorem ipsum dolor sit amet.</li>
                    <li className={styles.termsLi}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, corrupti.</li>
                    <li className={styles.termsLi}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, corrupti.</li>
                    <li className={styles.termsLi}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, corrupti.</li>
                </ul>
            </div>

        </div>
    )
}

export default TermsandConditions
