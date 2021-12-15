import React from 'react'
import { useRouter } from 'next/router'
import resources from '../../database/resources'
import styles from '../../styles/Category.module.css'
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import Link from 'next/link'
import ResourceCard from '../../components/ResourceCard'

function Category() {

    const router = useRouter()
    const { category } = router.query
    var query = category

    return (
        <div className={styles.container} >
            <div className={styles.queryInfo}>
                <span className={styles.queryFlex}><MdIcons.MdVerified style={{color:'rgb(0, 119, 255)'}} className={styles.queryIcon}/> Available resources for <span className={styles.queryText}>{query}</span></span>
                <span className={styles.queryAbout}>All the below shown resources are verfied by our volunteers though we dont assure for available stocks. For more details read our &nbsp; <Link href='/'><span className={styles.highLightedRed}>Terms &amp; Conditions.</span></Link> You can surely <Link href='/'><span className={styles.highLightedGreen}>Contact us</span></Link> for any assistance.</span>
            </div>
            <div className={styles.search_flex}>
                    <HiIcons.HiSearch className={styles.search_icon} />
                    <input className={styles.search_input} type="text" placeholder="Search"/>
                    <BsIcons.BsBackspace className={styles.clearQuery}/>
            </div>

            <div className={styles.resourceGrid}>
                <ResourceCard/>
                <ResourceCard/>
                <ResourceCard/>
                <ResourceCard/>
            </div>
        </div>
    )
}

export default Category
