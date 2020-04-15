import React, { useState } from 'react'
import './styles/fileexplorer.css'

// libraries
import {
    Container,
    Row
} from 'reactstrap'

// components
import Icons from './icons.jsx'


export default () => {

    
    const check_type = (type) => {
        const img_file_type = ['jpg', 'png', 'jpeg', 'ai', 'bmp', 'gif', 'ico', 'ps', 'psd', 'svg', 'tif', ]
        const text_file_type = ['txt', 'log', 'docx', 'doc', 'odt', 'pdf', 'rtf', 'tex', 'wpd']
        
        let type2 = ''
        
        if (type === 'folder') {
            type2 = type
        } else if (img_file_type.includes(type)) {
            type2 = 'img'
        } else if (text_file_type.includes(type)) {
            type2 = 'text_file'
        } else {
            type2 = 'other'
        }

        return type2
    }
    
    const [content, setContent] = useState([
        {
            type: 'folder',
            target: 'home', 
            name: '',
            date_created: '',
            date_modified: '',
            size: ''
        },
        {
            type: 'docx',
            target: 'word', 
            name: '',
            date_created: '',
            date_modified: '',
            size: ''
        },
        {
            type: 'jpg',
            target: 'img', 
            name: '',
            date_created: '',
            date_modified: '',
            size: ''
        },
        {
            type: 'jpg',
            target: 'img', 
            name: '',
            date_created: '',
            date_modified: '',
            size: ''
        },
        {
            type: 'jpg',
            target: 'img', 
            name: '',
            date_created: '',
            date_modified: '',
            size: ''
        }
    ])
    
    return (
        <>
            <Container fluid>
                <Row>
                    
                    {/* type of 'type': folder, text_file, img, NULL */}
                    
                    {
                        content.map(item => (
                            <Icons type={check_type(item.type)} target={item.target} />
                        ))
                    }
                    
                </Row>
            </Container>
        </>
    )
}