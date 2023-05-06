import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const LinkBack = () => {
  return (
    <Container className="m-10 pt-5">
      <h1 className="pt-5 align-top border-right inline-block align-content-center">
        404
      </h1>
      <div className="inline-block align-middle">
        <h2 className="font-weight-normal lead" id="desc">
          The page you requested was not found.
        </h2>
      </div>
      <Link to="/shop">Back to the store</Link>
    </Container>
  );
};

export default LinkBack;
