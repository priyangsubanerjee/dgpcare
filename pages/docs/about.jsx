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
                    <span className={styles.about}>We stand with everyone fighting on the frontlines against <Link href="/"><span className={styles.highlightedLink}>Covid-19</span></Link></span>
                </div>

                <div className={styles.hr}></div>

                <p className={styles.aboutBody}>
                    This page helps you find all necessary resources near your city, ranging from ambulance service providers, oxygen suppliers, nearby hospitals, blood donors, pharmacies, telemedicine services, food services and many more. 
                    As a very small team, we do our best to verify all resources mentioned in the app. Despite this, there might be gaps in the information provided. To that extent, we need your feedback to correct any misinformation. 
                    If you have any suggestions, please let us know.
                </p>

                <div className={styles.faqContainer}>

                    <span className={styles.faqHeader}>F.A.Qs</span>

                    <div className={styles.faq}>
                        <span className={styles.faqQuestion}><BiIcons.BiRightArrow style={{marginRight:'10px', fontSize:'15px'}}/> What do we do ?</span>
                        <p className={styles.faqAnswer}>In simple words we amplify the available resources in Durgapur so that you can find it easily and efficiently.</p>
                    </div>

                    <div className={styles.faq}>
                        <span className={styles.faqQuestion}><BiIcons.BiRightArrow style={{marginRight:'10px', fontSize:'15px'}}/>How do we do it ?</span>
                        <p className={styles.faqAnswer}>We have a team of volunteer{`'`}s who are working 24x7 just to verify all the data{`'`}s collected from sources.</p>
                    </div>

                    <div className={styles.faq}>
                        <span className={styles.faqQuestion}><BiIcons.BiRightArrow style={{marginRight:'10px', fontSize:'15px'}}/>Who are we ?</span>
                        <p className={styles.faqAnswer}>We are a group of dedicated volunteers who curate and verify the data coming from several sources.</p>
                    </div>

                    <div className={styles.faq}>
                        <span className={styles.faqQuestion}><BiIcons.BiRightArrow style={{marginRight:'10px', fontSize:'15px', width:'fit-content'}}/>Which cities do we serve ?</span>
                        <p className={styles.faqAnswer}>Currently we serve Durgapur as our primary city, though we may expand with future needs.</p>
                    </div>
                    
                    <div className={styles.faq}>
                        <span className={styles.faqQuestion}><BiIcons.BiRightArrow style={{marginRight:'10px', fontSize:'15px', width:'fit-content'}}/> <span>Are we earning a penny from it ?</span> </span>
                        <p className={styles.faqAnswer}>No, because it affects all of us. Today it{`'`}s someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.</p>
                    </div>

                    <div className={styles.faq}>
                        <span className={styles.faqQuestion}><BiIcons.BiRightArrow style={{marginRight:'10px', fontSize:'15px', width:'fit-content'}}/> <span>What can you do ?</span> </span>
                        <p className={styles.faqAnswer}>Share this page with your friends, colleagues, and neigbours &amp; keep them informed too!</p>
                    </div>

                    <div className={styles.linkContainer}>
                        <span className={styles.link}><AiIcons.AiOutlineLink style={{marginRight:'10px'}}/>dgpcovidresources.vercel.app</span>
                        <span className={styles.actionLink} style={{color: copied?'rgba(255, 255, 255)':'rgb(0, 0, 0)', background: copied?'rgb(0, 190, 0)':'rgba(0, 0, 0, 0.05)'}} onClick={copyToClipboard}><MdIcons.MdCopyAll/></span>
                        <span className={styles.actionLink} onClick={share}><MdIcons.MdShare/></span>
                    </div>
                </div>
            
            </div>
        </>
       
    )
}

export default About
