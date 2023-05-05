import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

const Navigation = () => {
  const cartValue = useSelector((state) => state.cart.value);
  const pointValue = useSelector((state2) => state2.point.value);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">SampleStore</Navbar.Brand>
        <Navbar.Text>cart value: ${cartValue}</Navbar.Text>
        <Navbar.Text>
          {pointValue > 1 || pointValue === 0 ? "points: " : "point: "}
          {pointValue}
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
