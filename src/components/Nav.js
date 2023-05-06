import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const cartValue = useSelector((state) => state.cart.value);
  const pointValue = useSelector((state2) => state2.point.value);

  return (
    <Navbar className="w-100" bg="light" expand="sm" fixed="top">
      <Container>
        <Navbar.Brand>SampleStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">cart value: ${cartValue}</Nav>
          <Nav className="me-auto">
            {pointValue > 1 || pointValue === 0 ? "points: " : "point: "}
            {pointValue}
          </Nav>
          <Nav className="me-auto">
            <Link to="/shop">Shop</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/user">User</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
