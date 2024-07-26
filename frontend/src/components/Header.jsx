import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {
  FaUser,
  FaClipboardList,
  FaShieldAlt,
  FaSignInAlt,
  FaGavel,
} from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">
              <img
                src="/NCRTC_Logo.png"
                width="95"
                height="40"
                className="d-inline-block align-top"
                alt="NCRTC logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/citizenLogin">
                <Nav.Link>
                  <FaSignInAlt /> Citizen Login
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/complaintStatus">
                <Nav.Link>
                  <FaClipboardList /> Complaint Status
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/handlingPolicy">
                <Nav.Link>
                  <FaShieldAlt /> Handling Policy
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/vigilanceLogin">
                <Nav.Link>
                  <FaGavel /> Vigilance Login
                </Nav.Link>
              </LinkContainer>
              <NavDropdown title="English" id="language-selector">
                <NavDropdown.Item href="#action1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Hindi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
