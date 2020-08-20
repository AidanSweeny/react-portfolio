import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

class Header extends React.Component {
    
    render() {
        return (
            <Navbar bg="info" variant="dark">
                <Navbar.Brand href="#home">Aidan Sweeny</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar>
        )
    };
}
export default Header;