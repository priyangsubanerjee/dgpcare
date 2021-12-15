import React from 'react'
import styles from '../styles/NewsArticle.module.css'
import * as BsIcons from 'react-icons/bs'

function NewsArticle({article}) {
    return (
        <div className={styles.articleCard}>
            <span className={styles.articleDate}>{article.publishedAt.substring(0, 10) + " | " + article.publishedAt.substring(12, 16)}</span>
            <p className={styles.articleHeading}>{article.title}</p>
            <p className={styles.articleDescription}>{article.description.substring(0, 97)+'...'}</p>
            <p className={styles.articleDate}></p>
            <div className={styles.moreFlex}>
                <a rel='noreferrer' target="_blank" href={article.url}>
                    <button className={styles.articleReadMore}>Read more</button>
                </a>
                
                <BsIcons.BsShareFill className={styles.articleShare}/>
                <span className={styles.articleSource}>{article.source.name}</span>
            </div>
        </div>
    )
}

export default NewsArticle
