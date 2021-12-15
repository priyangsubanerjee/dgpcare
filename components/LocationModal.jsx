import React from 'react'
import styles from '../styles/LocationModal.module.css'
import * as GiIcons from 'react-icons/gi'
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'

function Modal({setModal}) {

    //close if clicked outside

    const handleClickOutside = (e) => {

        if(e.target.className === styles.modal) {
            setModal(false)
        }
    }

    return (
        
        <div className={styles.modal} onClick={handleClickOutside}>
            <div className={styles.modal_card}>
                <MdIcons.MdClose className={styles.close_modalButton} onClick={() => setModal(false)}/>
                <GiIcons.GiModernCity style={{fontSize:'60px', marginTop:'0px'}}/>
                <span style={{margin: '40px 0 0 0', padding:'0', fontSize:'22px', fontWeight:'600'}}>Hey there 👋</span>
                <p style={{padding:'0', fontSize: '15px', marginTop:'10px', color:'rgba(0, 0, 0, 0.7)', fontWeight:'500'}}>Seems you want to change your <span className={styles.highlighted}>Location?</span></p>
                <p className={styles.body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda quia obcaecati quibusdam dolorem temporibus perspiciatis corporis adipisci harum minima!</p>
                <div className={styles.buttons_flex}>
                    <button className={styles.send_locationRequest}>Send request<RiIcons.RiSendPlaneFill style={{marginLeft:'10px'}}/></button>
                    <button className={styles.close_modal} onClick={() => setModal(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
