import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FormControl} from 'react-bootstrap';

class Header extends Component {

    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">GO-CORONA</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/india" className="nav-link">India</Link>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Nav>
            </Navbar>
        )
    }
}

export default Header;