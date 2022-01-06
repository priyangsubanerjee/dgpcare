import React from 'react'
import {gql, GraphQLClient} from 'graphql-request'
import styles from '../../styles/pages/TeamMembers.module.css'
import Footer from '../../components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from  'react-icons/ai'
import * as HiIcons from 'react-icons/hi'
import { useState } from 'react'
import TeamMemberCard from '../../components/TeamMemberCard'


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
  
        members{
              name
          image {
            url
          }
          twitter
          instagram
          github
          linkedin
          description
        }
      }
    `


    const data = await GraphClient.request(query)
    const members = data.members

    return{

        props: {

            members,
        },
        revalidate: 60,
    }
}


function TeamMembers({ members }) {

    const [data, setData] = useState(members)
    const [filtered, setFiltered] = useState([])

    console.log(members)

    const [query, setQuery] = useState('')

    return (
        <>
            <Head>
                <title>Team Members</title>
            </Head>

            <div className={styles.container}>
                
                <div>
                    <span className={styles.header}>
                        <AiIcons.AiOutlineTeam/>
                        <span className={styles.header_text}>Team Members</span>
                    </span>
                    <span className={styles.about}>We would like to thank 🙏 all volunteers who, for the last 18 months, extended their time and effort towards collating and publishing data.</span>
                    
                    <div className={styles.search_parentFlex}>
                        <div className={styles.search_flex}>
                                <HiIcons.HiSearch className={styles.search_icon} style={{color:'var(--text-primary)'}}/>
                                <input className={styles.search_input} type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} value={query}/>
                                <BsIcons.BsBackspace className={styles.clearQuery} onClick={() => setQuery('')}/>
                        </div>
                     </div>
                    <div className={styles.hr}></div>
                </div>

                <br />
                <br />
                
                <div className={styles.teamMemeberContainer}>
                    {
                        data.map((item) => {

                            return <TeamMemberCard key={item.id} props={item}/>
                        })
                    }
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default TeamMembers
