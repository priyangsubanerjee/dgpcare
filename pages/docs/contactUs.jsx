import React from 'react'
import styles from '../../styles/ContactUs.module.css'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'
import * as IoIcons from 'react-icons/io5'
import { useState, useEffect} from 'react'
import Link from 'next/link'
import Footer from '../../components/Footer'

function ContactUs() {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(email, message, name)
        
        if(email && message && name) {
            setEmail('')
            setMessage('')
            setName('')
        }
        else {
            alert('Please fill out all fields')
           
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

                    <div className={styles.formGroup}>

                        <label className={styles.formLabel}>Name</label>
                        <input className={styles.formInput} placeholder='Enter your name' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className={styles.formGroup}>

                        <label className={styles.formLabel}>Phone/E-mail</label>
                        <input className={styles.formInput} placeholder='Phone / Email address' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                     <div className={styles.formGroup}>

                        <label className={styles.formLabel}>Message</label>
                        <textarea className={styles.formInput} placeholder='Enter your message' type='text' rows={7} value={message} onChange={(e) => setMessage(e.target.value) }/>
                    </div>

                    <div className={styles.formGroup}>

                        <button className={styles.formButton} onClick={(e) => handleSubmit(e)}>Send <IoIcons.IoSendSharp style={{marginLeft:'10px'}} /></button>
                    </div>

                </div>
                <Footer/>
        </div>
    )
}

export default ContactUs