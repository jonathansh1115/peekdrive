import React from 'react'

// libraries
import { Col } from 'reactstrap'
import { useHistory } from 'react-router-dom'

export default (props) => {
    
    let history = useHistory()
    
    const { type, target } = props

    const folder_src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Icons8_flat_folder.svg/1024px-Icons8_flat_folder.svg.png'
    const text_file = 'https://cdn0.iconfinder.com/data/icons/office-icon-set-2/100/Noun_Project_100Icon_10px_grid-07-512.png'
    const img_src = 'https://pngimage.net/wp-content/uploads/2018/06/picture-icon-png-5.png'
    const other_src = 'https://img.icons8.com/pastel-glyph/2x/file.png'
    
    let icon_src = ''

    if (type === 'folder') {
        icon_src = folder_src
    } else if (type === 'text_file') {
        icon_src = text_file
    } else if (type === 'img') {
        icon_src = img_src
    }else {
        icon_src = other_src
    }
    
    return (
        <Col xl='2' lg='3' md='4'>
            <div className='item' 
                onDoubleClick={
                    () => {
                        history.push(`/${target}`)
                    }
            }>
                <img 
                    src={icon_src}
                    style={{width:'90%'}}
                    alt='' />
            </div>
        </Col>
    )
}