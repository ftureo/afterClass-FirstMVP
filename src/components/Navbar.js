import React, { useState } from 'react';

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
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Productos
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Placas de Vídeo</DropdownItem>
                                <DropdownItem>Procesadores</DropdownItem>
                                <DropdownItem>Periféricos</DropdownItem>
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