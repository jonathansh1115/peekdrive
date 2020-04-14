import React from 'react'

// icons
import left from './icons/chevron-left.svg'
import right from './icons/chevron-right.svg'
import column from './icons/columns.svg'
import grid from './icons/grid.svg'
import list from './icons/list.svg'

// libraries
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    ButtonGroup
} from 'reactstrap'

// components
import SearchBox from './search_box.jsx'

export default (props) => {

    const { setUbFunc } = props
    
    return (
        <Navbar style={{backgroundColor:'rgb(230, 230, 230)', height:'7vh'}} light expand='md'>
            <Nav>
                <ButtonGroup size='sm'>
                    <Button color='light'><img src={left} style={{width:'20px'}} alt='' /></Button>
                    <Button color='light'><img src={right} style={{width:'20px'}} alt='' /></Button>
                </ButtonGroup>

                <ButtonGroup size='sm' style={{marginLeft:'3vh', marginRight:'3vh'}}>
                    <Button color='light'><img src={list} style={{width:'20px'}} alt='' /></Button>
                    <Button color='light'><img src={grid} style={{width:'20px'}} alt='' /></Button>
                    <Button color='light'><img src={column} style={{width:'20px'}} alt='' /></Button>
                </ButtonGroup>

                <SearchBox />

                <Button color='light' onClick={setUbFunc} style={{marginLeft:'3vh'}}>Uppy</Button>
                
            </Nav>
        </Navbar>
    )
}