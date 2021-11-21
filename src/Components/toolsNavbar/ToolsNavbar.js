import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler,
         Collapse, Nav, NavItem, NavLink, 
         UncontrolledDropdown,DropdownToggle, 
         DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';         
         
const ToolsNavbar = () =>{
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
                        <NavItem>
                            <NavLink href="#tractors">
                                TRACTORS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#implements">
                                IMPLEMENTS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#harvester">
                                HARVESTER
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#tools">
                                TOOLS
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                            className="shift_right"
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                USER PROFILE
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">EDIT PROFILE</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">FAVOURITES</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">CART</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark">ORDERS</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">LOGOUT</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>                        
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        </>
    );
}

export default ToolsNavbar;