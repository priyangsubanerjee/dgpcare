import React from 'react'
import styles from '../styles/pages/Notifications.module.css'
import * as VscIcons from 'react-icons/vsc'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import Link from 'next/link'
import Head from 'next/head'
import {gql, GraphQLClient} from 'graphql-request'
import NotificationCard from '../components/NotificationCard'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

export async function getStaticProps() {

    const url = process.env.ENDPOINT_URL
    const GraphClient = new GraphQLClient( url , 

        { 
            headers: { 
                
                'Authorization': process.env.GRAPH_CMS_TOKEN 
            } 
    })

    const query = gql`
    
    query{

        notifications{
          title
          content
          createdAt
          source
          url
        }
      
      }      
      
    `


    const data = await GraphClient.request(query)
    const notifications = data.notifications

    return{

        props: {

            notifications,
        },
        revalidate: 60
    }
}


function Notifications({notifications}) {

    const [notificationData, setNotificationData] = useState(notifications)
    const [query, setQuery] = useState('')

    useEffect(() => {

        if(query.length > 0){

            const filteredData = no.filter(notification => {

                return notification.title.toLowerCase().includes(query.toLowerCase()) || notification.content.toLowerCase().includes(query.toLowerCase()) || notification.source.toLowerCase().includes(query.toLowerCase())
            })

            setNotificationData(filteredData)
        }else{

            setNotificationData(notifications)
        }
    }, [query])


    return (

        <>
            <Head>
                <title>Notifications</title>
            </Head>

            <div className={styles.container}>
                <div>
                    <span className={styles.header}>
                        <VscIcons.VscBellDot style={{}}/>
                        <span className={styles.header_text}>Notifications</span>
                    </span>
                    <span className={styles.about}>All important notifications from site admin as well as concerned authorities.</span>
                </div>

                <div className={styles.search_flex}>
                        <HiIcons.HiSearch className={styles.search_icon} />
                        <input className={styles.search_input} type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}/>
                        <BsIcons.BsBackspace className={styles.clearQuery}/>
                </div>

                <br />
                <br />
                {

                    notificationData.map(notification => {

                        return(

                            <NotificationCard key={notification.id} notification={notification}/>
                        )
                    })
                }
                

            </div>

            <Footer/>
        </>
    )
}

export default Notifications
