import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import resources from '../../database/resources'
import styles from '../../styles/Category.module.css'
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import Link from 'next/link'
import ResourceCard from '../../components/ResourceCard'
import {gql, GraphQLClient} from 'graphql-request'
import Head from 'next/head'



export async function getServerSideProps() {

    const url = process.env.ENDPOINT_URL
    const GraphClient = new GraphQLClient( url , 

        { 
            headers: { 
                
                'Authorization': process.env.GRAPH_CMS_TOKEN 
            } 
    })

    const query = gql`
    
    query{

        resources{
          
          id
          title
          category
          description
          phone

        }
    }
    `


    const res = await GraphClient.request(query)
    const data = res.resources

    return{

        props: {

            data,
        }
    }
}

function Category({data}) {

    const router = useRouter()
    const { category } = router.query

    const [sQuery, setSquery] = useState('')
    const [resource, setResources] = useState(data?data:[])
    const [savedCards, setSavedCards] = useState(() => {

        if(typeof window !== 'undefined'){

            if(localStorage.getItem('savedCards')){

                return JSON.parse(localStorage.getItem('savedCards'))
            }else{

                return []
            }

        }else{

            return []
        }
    })


    useEffect(() => {
        
        localStorage.setItem('savedCards', JSON.stringify(savedCards))
        
    }, [savedCards])


    useEffect(() => {

        if(sQuery.length > 0) {

            const filtered = data.filter(function(item) {

                return item.title.toLowerCase().includes(sQuery.toLowerCase())

            })

            setResources(filtered)

        } else {

            setResources(data)
        }

    } , [sQuery])

    const categoryMap = category.split('-')
    const categoryName = categoryMap.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')

    return (

        <>
            <Head>
                <title>{categoryName}</title>
            </Head>

            <div className={styles.container} >

                <div className={styles.queryInfo}>
                    <span className={styles.queryFlex}><MdIcons.MdVerified style={{color:'rgb(0, 119, 255)'}} className={styles.queryIcon}/> Available resources for <span className={styles.queryText}>{categoryName}</span></span>
                    <span className={styles.queryAbout}>Remember we dont assure available stocks, read our &nbsp; <Link href='/'><span className={styles.highLightedRed}>Terms &amp; Conditions</span></Link> or you can <Link href='/'><span className={styles.highLightedBlue}>Contact us</span></Link> for any assistance.</span>
                </div>

                <div className={styles.search_flex}>
                    <HiIcons.HiSearch className={styles.search_icon} />
                    <input className={styles.search_input} type="text" placeholder="Search" onChange={(e) => setSquery(e.target.value)}  value={sQuery} />
                    <BsIcons.BsBackspace className={styles.clearQuery}/>
                </div>

                <div className={styles.resourceGrid}>

                    {

                        resource.map((resource, index) => {

                            if(resource.category === category){
                                
                                return <ResourceCard resource={resource} saveCards={savedCards} setSavedCard={setSavedCards} key={resource.id}/>
                            }

                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Category