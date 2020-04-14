import React, { useState } from 'react'
import './styles/main.css'

// components
import Navb from './components_main/nav.jsx'
import Sidebar from './components_main/sidebar.jsx'
import UploadBox from './components_main/uploadbox.jsx'
import FileExplorer from './components_main/fileexplorer.jsx'


export default () => {

    const [ub, setUb] = useState(true)

    const setUbFunc = () => {
        setUb(!ub)
    }
    
    return (
        <main>
            <Navb setUbFunc={setUbFunc} />

            <section id='main'>
                <Sidebar />

                <div id="right">
                    {
                        ub?
                        <UploadBox />
                        :
                        <FileExplorer />
                    }
                </div>
                
            </section>
        </main>
    )
}