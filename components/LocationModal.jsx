import React from 'react'
import styles from '../styles/LocationModal.module.css'
import * as GiIcons from 'react-icons/gi'
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import { useState } from 'react'
import SimpleToast from './SimpleToast'
import { logEvent } from '../analytics/firebase'
import { useRouter } from 'next/router'

function Modal({setModal}) {


    const router = useRouter();

    const handleClickOutside = (e) => {

        if(e.target.className === styles.modal) {
            setModal(false)
        }
    }

    const [toast, setToast] = useState(false)

    return (
        
        <div className={styles.modal} onClick={handleClickOutside}>
            <div className={styles.modal_card}>
                <MdIcons.MdClose className={styles.close_modalButton} onClick={() => setModal(false)}/>
                <GiIcons.GiModernCity style={{fontSize:'60px', marginTop:'0px'}}/>
                <span style={{margin: '40px 0 0 0', padding:'0', fontSize:'22px', fontWeight:'600'}}>Hey there 👋</span>
                <p style={{padding:'0', fontSize: '15px', marginTop:'10px', color:'rgba(0, 0, 0, 0.7)', fontWeight:'500', color:'var(--text-secondary)'}}>Seems you want to change your <span className={styles.highlighted}>Location?</span></p>
                <p className={styles.body}>Since we rely on the sources we get from our volunteers, we had to limit our radius. If we get enough requests from a locality, we may expand our radius of service.</p>
                <div className={styles.buttons_flex}>
                    <a href="#" rel='noopener noreferrer' target={'_self'} onClick={() => {
                        
                        setToast(true);
                        logEvent('locationChange_request', {

                            path: router.pathname,
                            date: new Date().toLocaleString(),
                        })
                        
                    }}>
                        <button className={styles.send_locationRequest}>Send request<RiIcons.RiSendPlaneFill style={{marginLeft:'10px'}}/></button>
                    </a>
                </div>

                {
                    toast && <SimpleToast props={ {text:"Page not ready yet.", type: "alert", setToast}} /> 
                }
                
            </div>
        </div>
    )
}

export default Modal
