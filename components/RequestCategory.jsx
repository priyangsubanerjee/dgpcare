import React from 'react';
import styles from '../styles/RequestCategory.module.css';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { logEvent } from '../analytics/firebase'
import { useRouter } from 'next/router';

function RequestCategory({setRequestO2, requestO2, category}) {

    const [requestSent, setRequestSent] = useState(false)
    const router = useRouter();


    useEffect(() => {

        
        if(requestSent){

            setTimeout(() => {

                logEvent("reqFor: " + category, {

                    path: router.pathname,
                    date: new Date().toLocaleString(),
                })

                localStorage.getItem('all-support-cache-requests') ? localStorage.setItem('all-support-cache-requests', JSON.stringify([...JSON.parse(localStorage.getItem('all-support-cache-requests')), category])) : localStorage.setItem('all-support-cache-requests', JSON.stringify([category]))
                setRequestO2(!requestO2)


            }, 2000)
        }

    }, [requestSent])


  return <div className={styles.container} onClick={() => {setRequestSent(true)}}>

      {

        requestSent == false ?
          
        <>
            <BsIcons.BsShieldCheck style={{color: 'inherit'}} className={styles.requestCategoryIcon}/>
            <span>Tap to send a request for {category}.</span>
        </>

        :

        <>
            <AiIcons.AiOutlineFileDone style={{color: 'inherit'}} className={styles.requestCategoryIcon}/>
            <span>Request sent successfully.</span>
        </>


      }

    

  </div>;
}

export default RequestCategory;
