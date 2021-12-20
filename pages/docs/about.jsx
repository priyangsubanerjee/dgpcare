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

                <div className={styles.horizontalFlex}>
                    <div className={styles.shareContainer}>
                        <span className={styles.shareHead}><BsIcons.BsStars/> &nbsp; Share this page?</span>
                        <div className={styles.socialIcons}>
                            <BsIcons.BsWhatsapp title='Whatsapp' className={styles.socialIcon}/>
                                <BsIcons.BsFacebook title='Facebook' className={styles.socialIcon}/>
                                <BsIcons.BsInstagram title='Instagram' className={styles.socialIcon}/>
                                <BsIcons.BsTwitter title='Twitter' className={styles.socialIcon}/>
                                <BsIcons.BsLinkedin title='Linkedin' className={styles.socialIcon}/>
                        </div>
                        <div className={styles.shareDescription}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab accusantium et, dicta doloremque quibusdam quidem ad voluptates aperiam, quas quaerat officiis? Vitae necessitatibus cupiditate minus blanditiis debitis nam amet nisi?
                        </div>
                        <button className={styles.shareButton}>Share now</button>
                    </div>
                </div>

                <div className={styles.faqContainer}>
                        <span className={styles.faqHead}>F.A.Q{`'`}s Section</span>

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
               
            </div>
        </>
       
    )
}

export default About
