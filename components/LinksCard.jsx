import React from 'react'
import styles from '../styles/LinkCard.module.css'
import Link from 'next/link'
import * as BsICons from 'react-icons/bs'

function LinksCard({props}) {
    return (
        <div className={styles.category_card}>
                <span className={styles.card_title}>{props.title}</span>
                <p className={styles.card_body}>{props.description}</p>
                <div className={styles.linkAction}>
                    <a  target="_blank" rel="noopener noreferrer" href={props.link} style={{width:'fit-content'}}>
                        <button className={styles.card_button}>Open link</button>
                    </a>
                </div>
        </div>
    )
}

export default LinksCard
