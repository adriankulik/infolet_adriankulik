import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import productList from "../data/mockProductsAPIResponse";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { cartAddition } from "../redux/cartSlice"; //todo cartReset
import { pointAddition } from "../redux/pointSlice";
import { useDispatch } from "react-redux";
import React from "react";
import pointCounter from "../functions/pointCounter";

const Products = () => {
  const dispatch = useDispatch();

  return (
    <Stack className="col-md-5 mx-auto pt-5" direction="vertical" gap={3}>
      <Row className=".mb-5"></Row>
      {productList.map((product) => (
        <Card key={product.id}>
          <Card.Img src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.author}</Card.Text>
            <Button
              onClick={() => {
                dispatch(cartAddition(product.price));
                dispatch(pointAddition(pointCounter(product.price)));
              }}
              variant="primary"
            >
              ${product.price}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
};

export default Products;
