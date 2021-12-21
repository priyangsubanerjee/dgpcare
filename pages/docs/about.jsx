import React from 'react'
import styles from '../../styles/About.module.css'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'

function About() {


    const[copied, setCopied] = useState(false)

    async function share(){

        const shareData = {
            title: 'Dgp Covid Resources',
            text: 'https://dgp-covid-resources.vercel.app/',
            url: 'https://dgp-covid-resources.vercel.app/'
        }

        try {
            
            await navigator.share(shareData)
            alert('Shared!')
    
        } catch(err) {

            alert(err.message)
        }

    }

    function copyToClipboard() {

        navigator.clipboard.writeText('https://dgpcovidresources.vercel.app/')
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 5000)
    }



    return (

        <>
            <Head>
                <title>About us</title>
            </Head>

            <div className={styles.container}>
                
                <div>
                    <span className={styles.header}>
                        <BsIcons.BsLightbulb/>
                        <span className={styles.header_text}>About us</span>
                    </span>
                    <span className={styles.about}>We stand with everyone fighting on the frontlines against <Link href="/"><span className={styles.highlightedRed}>Covid-19.</span></Link></span>
                    <div className={styles.hr}></div>
                </div>

                <div className={styles.about_container}>
                    <p className={styles.aboutText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum nulla a dolor architecto corrupti eum optio harum odit eius sit qui, repellat est minima aperiam in soluta id reiciendis, repellendus debitis. Commodi ipsum magnam in quidem porro asperiores vel vero hic, consequatur, aperiam, unde ea repellendus odio saepe ex!</p>
                </div>

                <div className={styles.faqContainer}>
                        <span className={styles.faqHead}>F.A.Q Section</span>

                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>Who are we ?</summary>
                            <p className={styles.faqAnswer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo!</p>
                        </details>
                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>What do we do?</summary>
                            <p className={styles.faqAnswer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo!</p>
                        </details>
                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>What do we do?</summary>
                            <p className={styles.faqAnswer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo!</p>
                        </details>
                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>What do we do?</summary>
                            <p className={styles.faqAnswer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo!</p>
                        </details>
                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>What do we do?</summary>
                            <p className={styles.faqAnswer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo!</p>
                        </details>
                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>What do we do?</summary>
                            <p className={styles.faqAnswer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo!</p>
                        </details>
                </div>

                <div className={styles.shareContainer}>
                    <span>Share this page ?</span>&nbsp;&nbsp;&nbsp;
                    <BsIcons.BsWhatsapp className={styles.socialIcon}/>
                    <BsIcons.BsFacebook className={styles.socialIcon}/>
                    <BsIcons.BsTwitter className={styles.socialIcon}/>
                    <BsIcons.BsLinkedin className={styles.socialIcon}/>
                    <BsIcons.BsReddit className={styles.socialIcon}/>
                    <BsIcons.BsPinterest className={styles.socialIcon}/>
                    
                </div>
               
            </div>
        </>
       
    )
}

export default About
