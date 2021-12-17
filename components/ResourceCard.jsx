import React from 'react'
import styles from '../styles/ResourceCard.module.css'
import * as FiIcons from 'react-icons/fi'
import * as IoIcons from 'react-icons/io'
import * as IoIcons5 from 'react-icons/io5'
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'

import { useState, useEffect } from 'react'


function ResourceCard({resource, saveCards, setSavedCard}) {

    const [saved, setSaved] = useState(false)

    useEffect(() => {

        saveCards.map(card => {

            if(card.id === resource.id){

                setSaved(true)

            }

        })

    }, [saveCards])

    function handleSaveCard() {

        console.log("clicked")

        if(saved){

            if (confirm("Remove " + resource.name.toLowerCase() + " from saved resources ?") == true) {

                setSavedCard(saveCards.filter(card => card.id !== resource.id))
                setSavedCard(saveCards.filter(card => card.id !== resource.id))
                console.log("object removed")
                setSaved(false)
              } else {
                
              }

        }else{

            setSavedCard([...saveCards, resource])
            console.log("object added")
            setSaved(true)

        }

    }

    return (

        
        <div className={styles.resourceCard}>
            <FiIcons.FiCheckCircle className={styles.resourceProviderIcon}/>
            <span className={styles.resourceProviderName}>{resource.name}</span>
            <span className={styles.resourceProviderDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, esse?</span>
            <div className={styles.resourceActionFlex}>
                <IoIcons.IoMdCall className={styles.resourceCallButton}/>
                <HiIcons.HiOutlineMail className={styles.resourceMailButton}/>
                <IoIcons5.IoShareSocial className={styles.resourceShareButton}/>
                <BsIcons.BsBookmarkPlus className={styles.resourceBookmarkButton} onClick={handleSaveCard} style={{color: saved ? 'rgb(0, 119, 255)' : 'rgb(0, 0, 0)'}}/>
            </div>
        </div>
    )
}

export default ResourceCard
