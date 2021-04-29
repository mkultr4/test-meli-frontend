import React from "react";
// React bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Search Bar
import SearchBar from "../search/SearchBar";


const Header = () => {
  return (
    <Navbar bg="secondary" expand="lg" id="navbar-public" >
      <Container className="d-block">
        <div className="bar-wrapper">
          <Navbar.Brand href="/" />
          <Row>
            <Col xs={12}>
              <SearchBar />
            </Col>
          </Row>
        </div>
      </Container>
    </Navbar>
  )
}


export default Header;
