import React from 'react'
import styles from '../styles/ResourceCard.module.css'
import * as FiIcons from 'react-icons/fi'
import * as IoIcons from 'react-icons/io'
import * as IoIcons5 from 'react-icons/io5'
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'
import { useState, useEffect } from 'react'
import SimpleToast from './SimpleToast'


function ResourceCard({resource, saveCards, setSavedCard}) {

    const [saved, setSaved] = useState(false)
    const [toast, setToast] = useState(false)
    const categoryMap = resource.category.trim().split('-')
    const categoryName = categoryMap[0].charAt(0).toUpperCase() + categoryMap[0].slice(1) + ' ' + categoryMap[1].charAt(0).toUpperCase() + categoryMap[1].slice(1).substring(0, categoryMap[1].length - 2)

    useEffect(() => {

        saveCards.map(card => {

            if(card.id === resource.id){

                setSaved(true)

            }

        })

    }, [saveCards])

    function handleSaveCard() {

        if(saved){

            if (confirm("Remove " + resource.title.toLowerCase() + " from saved resources ?") == true) {

                setSavedCard(saveCards.filter(card => card.id !== resource.id))
                setSavedCard(saveCards.filter(card => card.id !== resource.id))
                setSaved(false)
              } else {
                
              }

        }else{


            setSavedCard([...saveCards, resource])
            setSaved(true)
            setToast(true)

            setTimeout(() => {

                setToast(false)
                
            }, 3000);

        }

    }

    const shareData = {
        title: 'Careplus Resources',
        text: 'Name: ' + resource.title + '\n' + 'Phone: ' + resource.phone + '\n' + 'Description: ' + resource.description + '\n' + 'Category: ' + categoryName + '/n/n/n',
        url: 'https://dgpcare.vercel.app'
      }
    

    const placeCall = async (number) => {

        window.open(`tel:${number}`)
    }

    const sendMessage = async (number) => {

        window.open(`sms:${number}`)
    }

    async function share() {

        try {
            
            await navigator.share(shareData)
            alert('Shared!')
    
        } catch(err) {

            alert(err.message)
        }

    }

    return (

        
        <div className={styles.resourceCard}>
            <span style={{display:'flex', alignItems:'center'}}>
                <FiIcons.FiCheckCircle className={styles.resourceProviderIcon}/> <span className={styles.resourceCategory}>{categoryName}</span>
            </span>
            
            <span className={styles.resourceProviderName}>{resource.title}</span>
            <span className={styles.resourceProviderDescription}>{resource.description}</span>
            <span className={styles.resourceProviderDescription}>{resource.phone}</span>
            <div className={styles.resourceActionFlex}>
                <IoIcons.IoMdCall className={styles.resourceCallButton} onClick={() => placeCall(resource.phone)}/>
                <HiIcons.HiOutlineMail className={styles.resourceSmsButton} onClick={() => sendMessage(resource.phone)}/>
                <IoIcons5.IoShareSocial className={styles.resourceShareButton} onClick={() => share()}/>
                <BsIcons.BsBookmarkPlus className={styles.resourceBookmarkButton} onClick={handleSaveCard} style={{color: saved ? 'var(--blue-primary)' : 'var(--black-primary)'}}/>
            </div>

            { 
                toast && <SimpleToast text={resource.title + " added to saved resources !"} /> 
            }

        </div>
    )
}

export default ResourceCard
