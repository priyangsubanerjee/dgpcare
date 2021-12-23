import React from 'react'
import { useState, useEffect } from 'react'
import ResourceCard from '../components/ResourceCard'
import styles from '../styles/pages/SavedResources.module.css'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import Link from 'next/link'
import Head from 'next/head'

function SavedResources() {

    const [query , setQuery] = useState('')

    const [savedCards, setSavedCards] = useState(() => {

        if(typeof window !== 'undefined'){

            if(localStorage.getItem('savedCards')){

                return JSON.parse(localStorage.getItem('savedCards'))
            }else{

                return []
            }

        }else{

            return []
        }
    })

    const [resources, setResources] = useState(savedCards)


    useEffect(() => {

        localStorage.setItem('savedCards', JSON.stringify(savedCards))
        setResources(savedCards)
    }
    , [savedCards])

    useEffect(() => {

        if(query.length > 0){

            setResources(savedCards.filter(card => card.title.toLowerCase().includes(query.toLowerCase())))
        }
        else{

            setResources(savedCards)
        }
     
    }, [query])


    return (

        <>
            <Head>
                <title>Saved Resources</title>
            </Head>
            
            <div className={styles.container}>

                <div>
                    <span className={styles.header}>
                        <BsIcons.BsBookmarkHeart style={{}}/>
                        <span className={styles.header_text}>Saved Resources</span>
                    </span>
                    <span className={styles.about}>Get all your saved resources at one place.</span>
                </div>

            
                <div className={styles.search_flex}>
                        <HiIcons.HiSearch style={{color:'var(--text-primary)'}} className={styles.search_icon} />
                        <input className={styles.search_input} type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}/>
                        <BsIcons.BsBackspace className={styles.clearQuery} onClick={() => setQuery('')}/>
                </div>



                <div className={styles.resourceGrid}>

                    {
                        resources.map(card => {

                            return(

                                <ResourceCard key={card.id} resource={card} saveCards={savedCards} setSavedCard={setSavedCards}/>
                            )
                        })
                    }

                    {
                        savedCards.length === 0 && <span className={styles.emptyMessage}>No saved resource found ! <Link href='/'><span className={styles.highlightedLink}>View categories</span></Link></span>
                    }

                </div>
                    

            </div>
        </>
    )
}

export default SavedResources
