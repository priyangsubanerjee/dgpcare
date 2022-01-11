import React from 'react'
import styles from '../styles/SimpleAlert.module.css'
import * as FcIcons from 'react-icons/fc'

function SimpleAlert({props}) {

    function detectLevel(level){

        switch(level){

            case 'low':
                return [styles.alertBox, styles.low].join(' ')
            case 'medium':
                return [styles.alertBox, styles.medium].join(' ')
            case 'high':
                return [styles.alertBox, styles.high].join(' ')
        }

    }

    function getIcon(level){

        switch(level){

            case 'low':
                return <FcIcons.FcOk/>
            case 'medium':
                return <FcIcons.FcMediumPriority/>
            case 'high':
                return <FcIcons.FcHighPriority/>
        }

    }

    return (
        <div className={detectLevel(props.level)}>

            <div className={styles.icon}> {getIcon(props.level)} </div> {props.message}
        </div>
    )
}

export default SimpleAlert
