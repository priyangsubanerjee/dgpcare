import React from 'react'
import styles from '../styles/Feeds.module.css'
import * as BsIcons from 'react-icons/bs'
import NewsArticle from '../components/NewsArticle';
import * as HiIcons from 'react-icons/hi'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export async function getStaticProps() {

    var url = 'https://newsapi.org/v2/top-headlines?' + 'country=in&' +'apiKey=29fee419e271480198a1c034ef68273c';
    var req = new Request(url);
    var res = await fetch(req)
                .then(function(response) {

                    return response.json();
                })

    return {
      props: { res },
      revalidate: 10 // 10 seconds 
    }
}

function Feeds({res}) {


    const data = res.articles.filter(function(item) {

        if(item.title.includes('Coronavirus') || item.title.includes('covid') || item.title.includes('COVID') || item.title.includes('COVID-19') || item.title.includes('covid-19') || item.title.includes('corona') || item.title.includes('Corona') || item.title.includes('coronavirus') || item.title.includes('Coronavirus')) {

            return item;
        }

        if(item.description.includes('Coronavirus') || item.description.includes('covid') || item.description.includes('COVID') || item.description.includes('COVID-19') || item.description.includes('covid-19') || item.description.includes('corona') || item.description.includes('Corona') || item.description.includes('coronavirus') || item.description.includes('Coronavirus')) {
                
                return item;
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
                    <BsIcons.BsBackspace className={styles.clearQuery}/>
            </div>

            <div className={styles.feedContainer}>

                {
                    feed.map((item, index) => {

                        return (
                            
                            <NewsArticle article={item} key={index}/>
                        )
                    })
                }

            </div>

            
        </div>
    )
}

export default Feeds