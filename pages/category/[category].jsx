import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../../styles/pages/Category.module.css'
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import Link from 'next/link'
import ResourceCard from '../../components/ResourceCard'
import {gql, GraphQLClient} from 'graphql-request'
import Head from 'next/head'
import Footer from '../../components/Footer'
import * as FcIcons from 'react-icons/fc'



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
    const [count , setCount] = useState(0)
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


        //count resources where category matches

        const countResources = resource.filter(res => res.category.includes(category))
        setCount(countResources.length)
        
    }, [])


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

    const categoryMap = category.includes('-') ? category.split('-') : category.split(' ')
    const categoryName = category.length > 1 ? categoryMap.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ') : category.charAt(0).toUpperCase() + category.slice(1)

    return (

        <>
            <Head>
                <title>{categoryName}</title>
            </Head>

            <div className={styles.container} >

                <div className={styles.queryInfo}>
                    <span className={styles.queryFlex}><MdIcons.MdVerified style={{color:'var(--blue-primary)'}} className={styles.queryIcon}/><span className={styles.queryText}>{categoryName}</span></span>
                    <span className={styles.queryAbout} style={{color:'var(--text-primary)'}}>Remember we dont assure available stocks, read our &nbsp; <Link href='/docs/PrivacyPolicy'><span className={styles.highLightedRed}>Terms &amp; Conditions</span></Link> or you can <Link href='/docs/contactUs'><span className={styles.highLightedBlue}>Contact us</span></Link> for any assistance.</span>
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
                    {
                        count == 0 && <div className={styles.noResource}>
                            <FcIcons.FcMediumPriority className={styles.noResourceIcon}/>
                            <span className={styles.noResourceText}>Our team is re-validating all the data related to <strong>{categoryName}</strong>.</span>
                        </div>
                    }

                <Footer/>
            </div>
        </>
    )
}

export default Category