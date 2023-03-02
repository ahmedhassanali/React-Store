import { Nav, Navbar, Form, Row } from "react-bootstrap";
import logo from "../../assets/MainNav/logo.svg";
import myProducts from "../../assets/MainNav/myProducts.png";
import menu from "../../assets/MainNav/menu.png";
import cart from "../../assets/MainNav/menu.png";
import './MainNavbar.css';
import { Link } from "react-router-dom";
import PopupButton from "./PopupCategoryButton";

function MainNavbar() {
  return (
    <>
      <Navbar bg="light" className="rounded-top" sticky="top">
        <Navbar.Brand href="#home" className="ms-5">
          <img src={logo} className="logo" alt="" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className="me-5 ">
          <Nav className="ms-auto">
            
            <PopupButton image = {menu} text = 'Rays'/>

            <Form className="form">
              <Form.Control type="search" placeholder="Search"  aria-label="Search" />
            </Form>

            <Nav.Link href="/">
              <img src={myProducts}className="icon" alt=""/>My Products
            </Nav.Link>

            <Nav.Link href="/">
              <img src={cart} className="icon" alt=""/>$ 0.00
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MainNavbar;
