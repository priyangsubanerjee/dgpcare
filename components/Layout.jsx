import React from 'react'
import Banner from './Banner'
import Topnav from './Topnav'
import { useState } from 'react'

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
