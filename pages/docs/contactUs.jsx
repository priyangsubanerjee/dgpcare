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

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')

    const[progress, setProgress] = useState(false)

    const data ={

        email: "priyangsu@gmail.com",
        message: "Hello",
    }

    const sendEmail = async (e) => {


            e.preventDefault()

            if(name && email && message){

                setProgress(true)

                emailjs.sendForm('service_cxwhhsp', 'template_ykrgagm', e.target, 'user_OOObyVAeI31O8d1TMR0nd')
                    .then((result) => {

                        e.target.reset()
                        setName('')
                        setEmail('')
                        setMessage('')
                        setProgress(false)
                        alert('Message sent successfully')
                        
                    }, (error) => {
                        console.log(error.text);
                        setProgress(false)
                    });

            }else{

                alert('Please fill all the fields')
                setProgress(false)
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

                <div className={styles.form}>

                <form onSubmit={sendEmail}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Name</label>
                        <input className={styles.formInput} value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' type="text" name="name" required/>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email / Phone</label>
                        <input className={styles.formInput} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Phone/Emal' type="text" name="email" required/>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Message</label>
                        <textarea className={styles.formInput} value={message} onChange={(e) => setMessage(e.target.value)} rows={7} placeholder='Enter your message' name="message" required/>
                    </div>
                   
                    <div className={styles.hFlex}>

                        {
                            progress && <div className={styles.spinner}></div>
                        }
                        
                        <button className={styles.formButton} type="submit">Send <IoIcons.IoSend style={{marginLeft:'10px'}}/></button>
                    </div>
                    

                </form>

            </div>


            <h3 style={{color:'var(--black-primary)'}}>Or</h3>
            <p style={{color:'var(--text-secondary)', lineHeight:'1.9'}}>send us an email at <a href="mailto:dgpcovidresources@gmail.com" style={{color:'var(--blue-primary)'}}>dgpcovidresources@gmail.com</a></p>
            <a href="mailto:dgpcovidresources@gmail.com"><span className={styles.openMail}><BiIcons.BiMailSend style={{marginRight:'10px'}}/> Tap to open mail</span></a>

            <Footer/>
            
        </div>
    )
}

export default ContactUs