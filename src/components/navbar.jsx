import React, { useState } from 'react'

// icons
import usericon from './user_icon.svg'

// libraries
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText
} from 'reactstrap'
import { Link } from 'react-router-dom' 

export default () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar style={{height:'10vh'}} color='light' light expand="md">

            <NavbarBrand href="/">Peek drive</NavbarBrand>

            <NavbarToggler onClick={toggle} />
            
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    
                </Nav>
                <NavbarText style={{display:'flex', alignItems:'center'}}>
                    <Link to='/' style={{color:'blue', marginRight:'1vh'}}>
                    Refer friends and earn storage
                    </Link>
                    <div className='user_img_frame' style={{
                        height:'50px',
                        width:'50px',
                        cursor: 'pointer',
                        borderRadius:'50%',
                        overflow:'hidden',
                    }}>
                        <img 
                            src='https://cdn.pinkvilla.com/files/styles/contentpreview/public/liam-payne-reveals-if-he-will-support-his-son-bear-payne-if-he-were-to-enlist-into-the-military.jpg?itok=uW4nJUqh'
                            style={{
                                width:'100%',
                            }}
                            alt='' />
                    </div>
                </NavbarText>
            </Collapse>
        </Navbar>
    )
}