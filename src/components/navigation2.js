import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'gatsby'

export default function navigation2() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             <Link to="/"><Navbar.Brand> NIA - CRPIP </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">NIA CENTRAL</Nav.Link>
                    <Nav.Link href="#pricing">Memorandum Circular</Nav.Link>
                    <NavDropdown title="Procurement" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">BAC Live Video Streaming</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Invitation to Bids</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Pre-bid Conference</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Minutes of Pre-bidding Conference</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Contract Agreement</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Supplemental Notice</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Notice to Proceed</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Notice of Award</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Notice of Auction Sale</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets"> About us</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Contact Us
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
