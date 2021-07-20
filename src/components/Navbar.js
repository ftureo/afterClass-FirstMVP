import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import CartWidget from './CartWidget';

function NavBar(){

    // Configuración propia de Reactstrap
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar className='containerNav' dark expand="md">
            <NavbarBrand><i className="fas fa-dragon"></i> My First E-Commerce</NavbarBrand>
            <div className='navbar-right'>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>   
                    <Nav className="linksNav" navbar>
                        <Link to='/'className='nav-item'>Productos</Link>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Categorías
                            </DropdownToggle>
                            <DropdownMenu right>
                            <Link to='/Productos/Categoria/Placas-de-video'><DropdownItem>Placas de Vídeo</DropdownItem></Link>
                            <Link to='/Productos/Categoria/Procesadores'><DropdownItem>Procesadores</DropdownItem></Link>
                            <Link to='/Productos/Categoria/perifericos'><DropdownItem>Perifericos</DropdownItem></Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                <CartWidget />
            </div>
        </Navbar>
    );
}
export default NavBar