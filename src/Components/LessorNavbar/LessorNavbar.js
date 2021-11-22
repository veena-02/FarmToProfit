import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler,
         Collapse, Nav, NavItem, NavLink, 
         UncontrolledDropdown,DropdownToggle, 
         DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';         
import './LessorNavbar.css';
         
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
                            <NavLink href="/lessorDashboard#tractors">
                                MARKETPLACE
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                MY EQUIPMENT
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/addvehicle">
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
                                className="shiftRight"
                                
                            >
                                USER PROFILE
                            </DropdownToggle>
                            <DropdownMenu right
                                className="shiftRight2" >
                                <DropdownItem>
                                    <NavLink className="text-dark"
                                    href="/editProfileL">EDIT PROFILE</NavLink>
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
                                <DropdownItem divider />
                                <DropdownItem className="text-dark">
                                    <button style={{marginLeft:"7px"}}>LOGOUT</button>
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