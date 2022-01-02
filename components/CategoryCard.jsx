import styles from '../styles/CategoryCard.module.css'
import * as BsICons from 'react-icons/bs'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io'
import Link from 'next/link'
import React from 'react'

function CategoryCard({props, setProgressBar}) {

    return (
        <div className={styles.category_card}>
                <BsICons.BsJournalMedical className={styles.card_icon}/>
                <span className={styles.card_title}>{props.title}</span>
                <p className={styles.card_body}>{props.description}</p>
                <div className={styles.linkAction}>
                    <Link href={`category/` + props.slug}>
                        <a style={{width:'fit-content'}}>
                            <button className={styles.card_button} onClick={() => setProgressBar(true)}>
                                View all <IoIcons.IoIosArrowForward style={{marginLeft:'5px'}}/>
                            </button>
                        </a>
                    
                    </Link>
                </div>
                
        </div>
    )
}

export default CategoryCard
