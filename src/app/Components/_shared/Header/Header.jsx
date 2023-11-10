import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container lg>
          <Navbar.Brand>
            Repositories
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Listing
            </Nav.Link>
            <Nav.Link to="/bookmark" as={Link}>
              Bookmarked
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
