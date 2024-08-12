import {Image, Container, Row, Stack, Navbar, Nav, Button} from 'react-bootstrap';
import Logo from "../../Assets/logo-KKN.png";
import Beranda from '../WebPage/beranda';
import Artikel from '../WebPage/Artikel';
import BerandaArtikel from "../WebPage/BerandaArtikel"
import { BrowserRouter as Router, Route, Link, Routes, Outlet,} from "react-router-dom";
import "./reuseableStyle.css";

function Header() {
  return (
    <Navbar expand="lg" fixed='top' className='navbar' fluid>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" fill>
          <Nav className="font margin-header ml-auto d-flex">
            <Nav.Link as={Link} to="/about" style={navbarStyle} className='font-header'>Profil Desa</Nav.Link>
            <Nav.Link as={Link} to="/artikel" style={navbarStyle} className='font-header'>Wisata</Nav.Link>
            <Nav.Link as={Link} to="/beranda-artikel" style={navbarStyle} className='font-header'>Potensial Desa</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const buttonStyle = {
  backgroundColor: 'transparent', 
  border: 'transparent', 
  // color: '#000', 
  // padding: '10px 20px'
};

const navbarStyle={
  marginInline:10,
  paddingInline:20,
  paddingBlock:10,
  borderRadius:100
}

export default Header;