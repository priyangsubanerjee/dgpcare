import React from 'react'
import styles from '../styles/NewsArticle.module.css'
import * as BsIcons from 'react-icons/bs'

function NewsArticle({article}) {

    const shareData = {
        title: 'Recent Feeds',
        text: article.title + '\n\n' + article.description.substring(0, 97)+'...' + '\n\n' +  "Source: "  + article.url + '\n\n\n',
        url: 'https://careplus.vercel.app'
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
        <div className={styles.articleCard}>
            <span className={styles.articleDate}>{article.publishedAt.substring(0, 10)}</span>
            <p className={styles.articleHeading}>{article.title}</p>
            <p className={styles.articleDescription}>{article.description.substring(0, 97)+'...'}</p>
            <p className={styles.articleDate}></p>
            <div className={styles.moreFlex}>
                <a rel='noreferrer' target="_blank" href={article.url}>
                    <button className={styles.articleReadMore}>Read more</button>
                </a>
                <BsIcons.BsShareFill className={styles.articleShare} onClick={() => share()}/>
                <span className={styles.articleSource}>{article.source.name.length > 20 ? article.source.name.substring(0, 17)+'...' : article.source.name}</span>
            </div>
        </div>
    )
}

export default NewsArticle
