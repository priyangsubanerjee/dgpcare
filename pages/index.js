import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import * as BiICons from 'react-icons/bi'
import CategoryCard from '../components/CategoryCard.jsx'
import data from  '../database/data.js'
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'


export default function Home() {

    const [query, setQuery] = useState('')
    const [searchError, setSearchError] = useState('')
    const [datai, setData] = useState(data)

    useEffect(() => {
        
        const newdata = data.filter(item => {
            return item.title.toLowerCase().trim().includes(query.toLowerCase().trim())
        })

        if(query.length === 0) {

            setSearchError('')
            setData(data)
        }

        else if(newdata.length != 0) {

            setData(newdata)
            setSearchError('showing results for ')
        }
        
        else {

            setSearchError('no results for ')
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
                <span className={styles.searchError}><span className={styles.error_text}>{searchError}</span> <span style={{color:'rgb(0, 119, 255)', marginLeft:'10px', fontWeight:'500'}}>{query.length==0?'':`/`+query}</span></span>
            </div>
            
            <div className={styles.categories_grid}>
                
                {
                    datai.map((item, index) => {

                        return <CategoryCard key={index} props={item}/>
                    })
                }

            </div>
            
        </div>
    )
}
