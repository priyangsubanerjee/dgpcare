import styles from '../styles/CategoryCard.module.css'
import * as BiICons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io'
import Link from 'next/link'
import React from 'react'

function CategoryCard({props}) {

    return (
        <div className={styles.category_card}>
                <MdIcons.MdOutlineHealthAndSafety className={styles.card_icon}/>
                <span className={styles.card_title}>{props.title}</span>
                <p className={styles.card_body}>{props.description}</p>
                <Link href={`category/` + props.slug}>
                    <button className={styles.card_button}>
                        View all <IoIcons.IoIosArrowForward style={{marginLeft:'5px'}}/>
                    </button>
                </Link>
        </div>
    )
}

export default CategoryCard
