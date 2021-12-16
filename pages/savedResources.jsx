import React from 'react'
import { useState, useEffect } from 'react'
import ResourceCard from '../components/ResourceCard'
import styles from '../styles/SavedResources.module.css'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import Link from 'next/link'

function SavedResources() {

    const [savedCards, setSavedCards] = useState(() => {

        if(typeof window !== 'undefined'){

            if(localStorage.getItem('savedCards')){

                console.log("Array found in localStorage")
                return JSON.parse(localStorage.getItem('savedCards'))
            }else{

                return []
            }

        }else{

            return []
        }
    })


    useEffect(() => {

        localStorage.setItem('savedCards', JSON.stringify(savedCards))
    }
    , [savedCards])


    return (
        <div className={styles.container}>

            <div>
                <span className={styles.header}>
                    <BsIcons.BsBookmarkHeart style={{}}/>
                    <span className={styles.header_text}>Saved Resources</span>
                </span>
                <span className={styles.about}>Get all your saved resources at one place.</span>
            </div>

        
            <div className={styles.search_flex}>
                    <HiIcons.HiSearch className={styles.search_icon} />
                    <input className={styles.search_input} type="text" placeholder="Search"/>
                    <BsIcons.BsBackspace className={styles.clearQuery}/>
            </div>



            <div className={styles.resourceGrid}>

                {
                    savedCards.map(card => {

                        return(

                            <ResourceCard key={card.id} resource={card} saveCards={savedCards} setSavedCard={setSavedCards}/>
                        )
                    })
                }

                {
                    savedCards.length === 0 && <span className={styles.emptyMessage}><BsIcons.BsStarFill className={styles.emptyIcon}/>You have nothing saved ! <Link href='/'><span className={styles.highlightedLink}>View categories</span></Link></span>
                }

            </div>
                

        </div>
    )
}

export default SavedResources
