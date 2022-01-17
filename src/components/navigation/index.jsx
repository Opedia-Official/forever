import React, { Component } from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap';
import Logo from '../../images/logo/logo.png'
import './nav.css';
import {Link, animateScroll as scroll } from "react-scroll";
export default class index extends Component {
    render() {
        return (
            <div className='navigation-top'>   
                <Navbar bg="light" expand="lg" className='text-center bg-dark navbar-expand-md'>
                <Container>
                    <Navbar.Brand href="#home"><img src={Logo} onClick={()=>scroll.scrollToTop()} duration={100} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home" onClick={()=>scroll.scrollToTop()} duration={100} >Home</Nav.Link>
                        <Link className="nav-link" to="useCase" smooth={true} duration={100} >Use Cases</Link>
                        <Link className="nav-link" to="Roadmap" smooth={true} duration={100} >Roadmap</Link>
                        <Link className="nav-link" to="Partners" smooth={true} duration={100} >Partners</Link>
                        <Link className="nav-link" to="AboutUs" smooth={true} duration={100} >About Us</Link>
                        <Link className="nav-link" to="Shop" smooth={true} duration={100} >Shop</Link>
                        <Link className="nav-link" to="ContactUs" smooth={true} duration={100} >Contact Us</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        )
    }
}
