import React from 'react'
import Banner from './Banner'
import Topnav from './Topnav'
import { useState } from 'react'
import { useEffect } from 'react'
import { firebase, firebaseConfig } from '../analytics/firebase'


function Layout({ children}) {

    const [banner, setBanner] = useState(false)

            

    return (
        <div>
            <Topnav/>
            {banner && <Banner setBanner={setBanner}/>}
            {children}
        </div>
    )
}

export default Layout
