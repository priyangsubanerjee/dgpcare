import React from 'react'
import styles from '../styles/Feeds.module.css'
import * as BsIcons from 'react-icons/bs'
import NewsArticle from '../components/NewsArticle';
import * as HiIcons from 'react-icons/hi'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export async function getStaticProps() {

    var apiKey = process.env.NEWS_API_KEY;
    var url = 'https://newsapi.org/v2/top-headlines?' + 'country=in&' +'apiKey=' + apiKey
    var req = new Request(url);
    var res = await fetch(req)
                .then(function(response) {

                    return response.json();
                })

    return {
      props: { res },
      revalidate: 5,
    }
}

function Feeds({res}) {

    const data = res.articles.filter(function(item) {

        if(item.title != null && item.description != null && item.publishedAt != null && item.url != null){

            if(item.title.includes('covid') || item.title.includes('corona') || item.title.includes('covid-19') || item.description.includes('covid') || item.description.includes('corona') || item.description.includes('covid-19')){

                return item;
            }
        }
    })

    const [feed, setFeed] = useState(data)
    const [search, setSearch] = useState('')

    useEffect(() => {

        if(search.length > 0) {

            const filtered = data.filter(function(item) {

                return item.title.toLowerCase().includes(search.toLowerCase())
            })

            setFeed(filtered)
            
        } else {

            setFeed(data)
        }

    } , [search])

    return (
        <div className={styles.container}>

            <div>
                <span className={styles.header}>
                    <BsIcons.BsNewspaper style={{}}/>
                    <span className={styles.header_text}>Recent Feeds</span>
                </span>
                <span className={styles.about}>Getting you the latest developments of <Link href="/"><span className={styles.highlightedLink}>Covid-19</span></Link>  from all over India.</span>
            </div>

        
            <div className={styles.search_flex}>
                    <HiIcons.HiSearch className={styles.search_icon} />
                    <input className={styles.search_input} type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <BsIcons.BsBackspace className={styles.clearQuery} onClick={() => setSearch('')}/>
            </div>

            <div className={styles.feedContainer}>

                {
                    feed.map((item, index) => {

                        return (
                            
                            <NewsArticle article={item} key={index}/>
                        )
                    })
                }

                {
                    feed.length === 0 && <span className={styles.emptyMessage}><BsIcons.BsStarFill className={styles.emptyIcon}/>No updates for now! <Link href='/'><span style={{marginLeft:'10px', padding:'5px 10px'}} className={styles.highlightedLink}>View categories</span></Link></span>
                }

            </div>

            
        </div>
    )
}

export default Feeds