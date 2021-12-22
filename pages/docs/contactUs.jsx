import React from 'react'
import styles from '../../styles/pages/ContactUs.module.css'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'
import * as IoIcons from 'react-icons/io5'
import { useState, useEffect} from 'react'
import Link from 'next/link'
import Footer from '../../components/Footer'
import emailjs from 'emailjs-com'

function ContactUs() {

    const [email, setEmail] = useState('s')
    const [message, setMessage] = useState('s')
    const [name, setName] = useState('s')

    const[progress, setProgress] = useState(false)

    const data ={

        email: "priyangsu@gmail.com",
        message: "Hello",
    }

    const sendEmail = async (e) => {


            e.preventDefault()
           
            emailjs.sendForm('service_cxwhhsp', 'template_ykrgagm', e.target, 'user_OOObyVAeI31O8d1TMR0nd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

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

                <div className={styles.form}>

                <form onSubmit={sendEmail}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Name</label>
                        <input className={styles.formInput} placeholder='Enter your name' type="text" name="name" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email / Phone</label>
                        <input className={styles.formInput} placeholder='Enter Phone/Emal' type="text" name="email" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Message</label>
                        <textarea className={styles.formInput} rows={7} placeholder='Enter your message' name="message" />
                    </div>
                   
                    
                   
                    <input className={styles.formButton} type="submit" value="Send" />
                </form>

            </div>

            <Footer/>
            
        </div>
    )
}

export default ContactUs