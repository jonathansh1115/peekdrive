import React from 'react'
import './styles/sidebar.css'

// icons
import cloud from './icons/cloud.svg'

// libraries
import {
    Nav,
    NavItem,
} from 'reactstrap'
import { Link } from 'react-router-dom'


export default () => {
    return (
        <div id='left'>
            <Nav vertical>
                <NavItem className='navitem section_name'>
                    <span className='title'>Cloud Drives</span>
                </NavItem>

                <Link to='/' className='link'>
                    <NavItem className='navitem'>
                        <span className="normal">
                            <img src={cloud} style={{width:'22px', marginRight:'1.5vh'}} alt='' />
                            Jonathan' Drive
                        </span>
                    </NavItem>
                </Link>

                <Link to='/' className='link'>
                    <NavItem className='navitem'>
                        <span className="normal">
                            <img src={cloud} style={{width:'22px', marginRight:'1.5vh'}} alt='' />
                            Sarah's Drive
                        </span>
                    </NavItem>
                </Link>
            </Nav>

            <Nav vertical style={{marginTop:'5vh'}}>
                <NavItem className='navitem section_name'>
                    <span className='title'>Connected Apps</span>
                </NavItem>

                <Link to='/' className='link'>
                    <NavItem className='navitem'>
                        <span className="normal">
                            <img src='https://icons.iconarchive.com/icons/marcus-roberto/google-play/512/Google-Drive-icon.png' style={{width:'22px', marginRight:'1.5vh'}} alt='' />
                            Google Drive
                        </span>
                    </NavItem>
                </Link>

                <Link to='/' className='link'>
                    <NavItem className='navitem'>
                        <span className="normal">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/1200px-Dropbox_Icon.svg.png' style={{width:'22px', marginRight:'1.5vh'}} alt='' />
                            Dropbox
                        </span>
                    </NavItem>
                </Link>
            </Nav>
        </div>
    )
}