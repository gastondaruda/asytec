import React from "react"
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap/';
import { NavLink } from 'react-router-dom';
import navLogo from "../../Imagenes/logo.png"

export default function NavbarComponent(){
    return(
        <>
        {['xl'].map((expand) => (
        <Navbar collapseOnSelect key={expand} bg="light" expand={expand} className="navbar" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#/">
                    <NavLink to="/">
                        <img src={navLogo} alt="logo" className="nav-logo"/>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Gaston Da Ruda - Frontend developer
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                    <Nav.Link href="#/">
                        <NavLink to="/Servicios">
                            Servicios
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link href="#/">
                        <NavLink to="/Nosotros">
                            Quiénes Somos
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link href="#/">
                        <NavLink to="/Cliente">
                            Clientes
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link href="#/">
                        <NavLink to="/Contacto">
                            Contacto
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/company/asytec/" target="_blank"  rel="noopener ">
                            Linkedin
                    </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
      ))}
        
        </>
    )
}