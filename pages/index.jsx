import { useState, useEffect } from 'react'
import {gql, GraphQLClient} from 'graphql-request'
import styles from '../styles/Home.module.css'
import * as BiICons from 'react-icons/bi'
import CategoryCard from '../components/CategoryCard.jsx'
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'


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

        categories {

            id
            title
            slug
            description

        }
    }
    `


    const data = await GraphClient.request(query)
    const categories = data.categories

    return{

        props: {

            categories,
        }
    }
}


export default function Home({categories}) {


    const [query, setQuery] = useState('')
    const [cData, setData] = useState([])
    const [progressBar, setProgressBar] = useState(false)

    useEffect(() => {

        setData(categories)

    } , [categories])


    useEffect(() => {
        
        if(query.length > 0) {

            const filteredData = categories.filter(category => {

                return category.title.toLowerCase().includes(query.toLowerCase())
            })

            setData(filteredData)
        }
        else {

            setData(categories)

        }
        
    }, [query])

    
    return (

        <div className={styles.container}>

            {
                progressBar && <div className={styles.progressBar}></div>
            }

            <>
            <span className={styles.heading}>
                <BiICons.BiCategoryAlt style={{marginRight:'8px'}}/>
                Categories
            </span>
            <p 
            style={{fontSize:'14px', color:'rgba(0, 0, 0, 0.5)', marginTop:'20px'}}>Select from the list of available categories.
            </p>
            </>
            
            <div className={styles.search_parentFlex}>
                <div className={styles.search_flex}>
                        <HiIcons.HiSearch className={styles.search_icon} />
                        <input className={styles.search_input} type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} value={query}/>
                        <BsIcons.BsBackspace className={styles.clearQuery} onClick={() => setQuery('')}/>
                </div>
            </div>
            
            <div className={styles.categories_grid}>
                
                {
                    cData.map((item) => {

                        console.log(item.id)

                        return <CategoryCard key={item.id} props={item} setProgressBar={setProgressBar}/>
                    })
                }

            </div>
            
        </div>
    )
}
