import { useState, useEffect } from 'react'
import {gql, GraphQLClient} from 'graphql-request'
import styles from '../styles/Home.module.css'
import * as BiICons from 'react-icons/bi'
import CategoryCard from '../components/CategoryCard.jsx'
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'


export async function getStaticProps() {

    const url = "https://api-ap-south-1.graphcms.com/v2/ckxbislni34ac01xi6rcjb42r/master"

    const GraphClient = new GraphQLClient( url , 

        { 
            headers: { 
                
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mzk4MTQ0NzUsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9ja3hiaXNsbmkzNGFjMDF4aTZyY2piNDJyL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImQ2YTQ2MTkwLTg2OTktNDYyMS05OGU4LWQ0MTZkZjEwMTVmNyIsImp0aSI6ImNreGJqNzdlMjM1YTYwMXpjNmxyZzF1YzAifQ.yWn6v9potNWUXg8pt-_gC66V1QSgKzJFVlcwx5-H6ff_WbXxeBiGuNhlFvuHTX5sSnn8pZtRjfNEOFG4fVVfjjGA4wOX40NdPf3fcXwHSAnSnk6VEjdai_ucuRZChatNnRw7y8g1cNQaS7GoHfSZjYpW2cTCHFf6ljwDEgjZSTPl0d3KeQkNYc6v4qdtuHhFwEo0eJYDAc8_XngfLhw1iuf6OVnn6ZfnZ5_OJv_GjtbUcFRAWvDRUIdqQ8N8p3VMdwHx5sit8NcWXaDXr9l8fVeJVJuKqIn0kuB5ol-d4AjuS2vFe7Xj7xGa6Jt9mmCcZFpIy5-9_o7Z43YHH3JkdbCUMgcKsAto1Z2MPhM2XC8Yh_V3lJ3fMiiWgNcSEw5u-WN0Esvc5UP8n4Q5IK0e1F-ZgrDofPZWPUOr1RAJRdVPbAutCLOzE0SmKzIxZMqy0j1HF49SVke2uTeUwzR9r2iafXig3msoFOKxRtU5EDOryUikUlzLndiEl5rmmAlqA6Oi7i6rzttZgpR5dUOnr5k4OBVDPYXoIxIfiUiVFhwdXao4ARSQTrXKN-pNW1VE3DcRsFVEu0yo-wLffjA7f0WMlb-HIQKbF7W2q3r7UpvIX-326CeBa-kGFX2wPMBciI6gCdTXKbzlz0lnkjwtRenHq38W9O6eISXlz3oxvo0' 
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
    const [cData, setData] = useState(categories.length>0?categories:[])

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
                    cData.map((item, index) => {

                        console.log(item.id)

                        return <CategoryCard key={item.id} props={item}/>
                    })
                }

            </div>
            
        </div>
    )
}
