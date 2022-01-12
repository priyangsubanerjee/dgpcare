import React from 'react'
import styles from '../styles/SimpleToast.module.css'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import * as FiIcons from 'react-icons/fi'

import { useEffect } from 'react'

function SimpleToast({props}) {


    useEffect(() => {

        setTimeout(() => {

            props.setToast(false)


        }, 2999);

    }, [])

    function getIcon(type){

        switch(type){

            case 'save':
                return <BsIcons.BsBookmarkHeart className={styles.icon}/>
            case 'alert':
                return <AiIcons.AiOutlineAlert className={styles.icon}/>
        }
    }

    return (
        <div className={styles.toastCard}>

            { getIcon(props.type) } { props.text }

        </div>
    )
}

export default SimpleToast
