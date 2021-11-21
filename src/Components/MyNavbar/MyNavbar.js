import React from 'react';
import brandName from './../../Assets/images/brandName.PNG';
import { Navbar, NavbarBrand, NavbarToggler,
         Collapse, Nav, NavItem, NavLink, 
         UncontrolledDropdown,DropdownToggle, 
         DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import './MyNavbar.css';         
         
const MyNavbar = () =>{
    return (
        <>
            <div>
            <Navbar
                color="dark"
                expand="md"
                dark
                
            >
                <NavbarBrand href="/" className="font_changes">
                    {/* <img src = {brandName} /> */}
                    Farm To Profit
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >                        
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                REGISTRATION
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="farmerRegistration">FARMER REGISTRATION</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark" 
                                    href= "lessorRegistration">LESSOR REGISTRATION</NavLink>
                                   
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/login">
                                LOGIN
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contactUs">
                                CONTACT US
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        </>
    );
}

export default MyNavbar;