import React from 'react'
import styles from '../../styles/pages/ContactUs.module.css'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'
import * as IoIcons from 'react-icons/io5'
import { useState, useEffect} from 'react'
import Link from 'next/link'
import Footer from '../../components/Footer'
import emailjs from 'emailjs-com'
import axios from 'axios'

function ContactUs() {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const[progress, setProgress] = useState(false)

    function sendMail(){

        if(email && message){

            setProgress(true)

            axios.post('/api/email', JSON.stringify({

                email,
                message

            }), {

                headers: {

                    'Content-Type': 'application/json'
                
            }}).then(res => {

                setProgress(false)
                console.log(res)
                setEmail('')
                setMessage('')

            }).catch(err => {

                setProgress(false)
                console.log(err)
            });
        }

    }

    return (
        <div className={styles.container}>

            <div>
                <span className={styles.header}>
                    <BiIcons.BiSupport/>
                    <span className={styles.header_text}>Contact us</span>
                </span>
                <span className={styles.about}>If you need any kind of <span className={styles.highlightedLink}>help</span> from us, or if you want to <span className={styles.highlightedLink}>report an issue,</span> then please leave it below. We&apos;ll respond asap.</span>
            </div>
            
            <div className={styles.formConatiner}>
                <div className={styles.form}>
                    <small className={styles.inputLabel}>Name</small>
                    <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input}/>
                    <br />
                    <small className={styles.inputLabel}>Message</small>
                    <textarea rows={5} type="text" placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)} className={styles.textarea}/>
                    <br />
                    <div className={styles.actionFlex}>

                        <button className={styles.submitButton} onClick={() => {
                            
                            sendMail()

                        }}>
                            {
                                progress && <div className={styles.sipnner}></div>
                            }
                            <span>Submit</span>
                            <BiIcons.BiSend className={styles.submitIcon}/>
                        </button>
                    </div>
                    <p className={styles.optionaltext}>or send us a mail at <a className={styles.emailLink} href="/">dgpcovidresources@gmail.com</a></p>
                </div>
            </div>

            <Footer/>
            
        </div>
    )
}

export default ContactUs