import React from 'react'
import Topnav from './Topnav'
import { createGlobalState } from 'react-hooks-global-state';

function Layout({ children}) {


    return (
        <div>
            <Topnav/>
            {
                
            }
            {children}
        </div>
    )
}

export default Layout
