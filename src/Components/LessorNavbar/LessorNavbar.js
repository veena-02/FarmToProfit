import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler,
         Collapse, Nav, NavItem, NavLink, 
         UncontrolledDropdown,DropdownToggle, 
         DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';         
         
const LessorNavbar = () =>{
    return (
        <>
            <div>
            <Navbar
                color="dark"
                expand="md"
                dark
                
            >
                <NavbarBrand href="/equipmentList" className="font_changes">
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
                            <NavLink href="/equipmentList#tractors">
                                MARKETPLACE
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                MY EQUIPMENT
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                            ADD EQUIPMENT
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
                                    href="/editProfile">EDIT PROFILE</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">REQUESTS</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="">ORDERS</NavLink>
                                </DropdownItem>
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

export default LessorNavbar;