import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'gatsby'

export default function navigation2() {
    return (
        <div>
            <Navbar  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
             <Link to="/"><Navbar.Brand> NIA - CRPIP </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="https://www.nia.gov.ph/">NIA CENTRAL</Nav.Link>
                    <Nav.Link href="http://omcrs.nia.gov.ph/">Memorandum Circular</Nav.Link>
                    <NavDropdown title="Procurement" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">BAC Live Video Streaming</NavDropdown.Item>
                        <NavDropdown.Item href="#">Invitation to Bids</NavDropdown.Item>
                        <NavDropdown.Item href="#">Pre-bid Conference</NavDropdown.Item>
                        <NavDropdown.Item href="#">Minutes of Pre-bidding Conference</NavDropdown.Item>
                        <NavDropdown.Item href="#">Contract Agreement</NavDropdown.Item>
                        <NavDropdown.Item href="#">Supplemental Notice</NavDropdown.Item>
                        <NavDropdown.Item href="#">Notice to Proceed</NavDropdown.Item>
                        <NavDropdown.Item href="#">Notice of Award</NavDropdown.Item>
                        <NavDropdown.Item href="#">Notice of Auction Sale</NavDropdown.Item>
                      {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>*/}
                       
                    </NavDropdown>  
                    </Nav>
                    <Nav>
                    <Link to="/contact"><Nav.Link href="contact"> Contact us</Nav.Link></Link> 
                    <Link to="/about"><Nav.Link href="about"> About us</Nav.Link></Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br /> 
            <br /> 
            <br />
        </div>
    )
}
