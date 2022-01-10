import React from 'react'
import styles from '../../styles/pages/About.module.css'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'

function About() {


    const[copied, setCopied] = useState(false)

    async function share(){

        const shareData = {
            title: 'Dgp Covid Resources',
            text: 'Army of selfless volunteers, working together to curate best possible Covid-19 resources for the community.\n\n',
            url: 'https://dgpcare.vercel.app/'
        }

        try {
            
            await navigator.share(shareData)
            
        } catch(err) {

            console.log(err)

        }

    }

    function copyToClipboard() {

        navigator.clipboard.writeText('https://dgpcare.vercel.app/')
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
                    <span className={styles.about}>We stand with everyone fighting on the frontlines against <a rel='noopener noreferrer' target={'_blank'} href="https://g.co/kgs/cvE1yX"><span className={styles.highlightedRed}>Covid-19</span></a></span>
                    <div className={styles.hr}></div>
                </div>

                <div className={styles.about_container}>
                    <p className={styles.aboutText}>We are a group of students with a common with a common mission to help India during the Covid crisis, brought us all together to create this platform. We try our best to amplify the need of resources while we undergo waves of Covid-19.</p>
                </div>

                <div className={styles.shareContainer} onClick={() => share()}>
                    <span>Share this page ?</span>&nbsp;&nbsp;&nbsp;
                    <BsIcons.BsWhatsapp className={styles.socialIcon}/>
                    <BsIcons.BsFacebook className={styles.socialIcon}/>
                    <BsIcons.BsTwitter className={styles.socialIcon}/>
                    <BsIcons.BsLinkedin className={styles.socialIcon}/>
                    <BsIcons.BsReddit className={styles.socialIcon}/>
                    <BsIcons.BsPinterest className={styles.socialIcon}/>
                    
                </div>

                <div className={styles.faqContainer}>
                        <span className={styles.faqHead}>F.A.Q Section</span>

                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>Are you official ?</summary>
                            <p className={styles.faqAnswer}>No.</p>
                        </details>
                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>What do you people do?</summary>
                            <p className={styles.faqAnswer}>We provide our users, all the necessary contact information of an emergency covid resource.</p>
                        </details>
                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>What are your sources ?</summary>
                            <p className={styles.faqAnswer}>We completely rely on our connections &amp; volunteers for getting inputs.</p>
                        </details>
                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>Who are you?</summary>
                            <p className={styles.faqAnswer}>We are a group of dedicated volunteers who curate and verify the data coming from several sources.</p>
                        </details>
                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>Are you earning from it?</summary>
                            <p className={styles.faqAnswer}>No, because it affects all of us. Today it&apos;s someone else who is getting infected; tomorrow it could be us.</p>
                        </details>
                        <details className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>Why my contact number is displayed without my concern?</summary>
                            <p className={styles.faqAnswer}>First of all we are extremely sorry if this happened to you. Since one of our major source of information is social media, so mistakes occur quite often. You just need to mail us your issue at dgpcovidresources@gmail.com and we&apos;ll solve it asap! </p>
                        </details>
                </div>

            </div>

            <Footer/>
        </>
       
    )
}

export default About
