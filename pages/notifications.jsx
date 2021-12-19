import React from 'react'
import styles from '../styles/Notifications.module.css'
import * as VscIcons from 'react-icons/vsc'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import Link from 'next/link'
import Head from 'next/head'
import {gql, GraphQLClient} from 'graphql-request'

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
          content{
            html
          }
        }
      }
      
      
      
    `


    const data = await GraphClient.request(query)
    const categories = data.notifications

    return{

        props: {

            categories,
        }
    }
}


function notifications({categories}) {

    console.log(categories)

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
                        <input className={styles.search_input} type="text" placeholder="Search"/>
                        <BsIcons.BsBackspace className={styles.clearQuery}/>
                </div>

            </div>
        </>
    )
}

export default notifications
