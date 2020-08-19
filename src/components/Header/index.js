import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            
            <Navbar bg="info" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        )
    };
}
export default Header;