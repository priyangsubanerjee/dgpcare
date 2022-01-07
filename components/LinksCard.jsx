import React from 'react'
import styles from '../styles/LinkCard.module.css'
import Link from 'next/link'
import * as BsICons from 'react-icons/bs'

function LinksCard({title, description, link}) {
    return (
        <div className={styles.category_card}>
                <span className={styles.card_title}>{title}</span>
                <p className={styles.card_body}>{description}</p>
                <div className={styles.linkAction}>
                    <a  target="_blank" rel="noopener noreferrer" href={link} style={{width:'fit-content'}}>
                        <button className={styles.card_button}>Open link</button>
                    </a>
                </div>
        </div>
    )
}

export default LinksCard
