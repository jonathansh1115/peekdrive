import React, { useState } from 'react'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import GoogleDrive from '@uppy/google-drive'
import Dropbox from '@uppy/dropbox'
import Facebook from '@uppy/facebook'
import Instagram from '@uppy/instagram'
import Onedrive from '@uppy/onedrive'
import Url from '@uppy/url'
import {
    Dashboard,
    DashboardModal,
    DragDrop,
    ProgressBar
} from '@uppy/react'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

import './styles/uploadbox.css'

export default () => {

    const [showInlineDashboard, setShowInlineDashboard] = useState(true)
    const [open, setOpen] = useState(false)
    
    const uppy = new Uppy({ id: 'uppy1', autoProceed: true, debug: true })
    .use(Tus, { endpoint: 'https://master.tus.io/files/' })
    .use(GoogleDrive, { companionUrl: 'https://companion.uppy.io' })
    .use(Dropbox, { companionUrl: 'https://companion.uppy.io' })
    .use(Facebook, { companionUrl: 'https://companion.uppy.io' })
    .use(Instagram, { companionUrl: 'https://companion.uppy.io' })
    .use(Onedrive, { companionUrl: 'https://companion.uppy.io' })
    .use(Url, { companionUrl: 'https://companion.uppy.io' })

    
    return (
        <div className='mid'>
            <Dashboard
                uppy={uppy}
                plugins={['GoogleDrive', 'Dropbox', 'Facebook', 'Instagram', 'Onedrive', 'Url']}
                metaFields={[
                { id: 'name', name: 'Name', placeholder: 'File name' }
                ]}
            />
        </div>
    )
}