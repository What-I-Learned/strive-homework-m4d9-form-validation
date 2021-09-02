// First way
import { Navbar, Nav, Container } from "react-bootstrap";
import { Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
// Second way
// import Navbar from 'react-bootstrap/Navbar'

const MyNavbar = ({ title, color }) => {
  // props is an object
  // {
  //   title: 'Strivestaurant'
  //   color: 'dark
  // }

  return (
    <Navbar
      className="bookstore-nav"
      onClick={(e) => console.log("clicked!", e)}
      collapseOnSelect
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="bookstore-brand">
          {title} - bookstore for the soul
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link className="bookstore-link" href="#pricing">
              Browse Books
            </Nav.Link> */}
            <NavDropdown
              title="Browse Books"
              className="bookstore-link"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">History</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex ml-4">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 bookstore-search"
              aria-label="Search"
            />
            <button className="bookstore-submit-search">
              <FiSearch />
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
