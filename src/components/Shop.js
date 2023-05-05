import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import productList from "../data/mockProductsAPIResponse";
import Card from "react-bootstrap/Card";
import { cartAddition, cartReset } from "../redux/cartSlice";
import { pointAddition } from "../redux/pointSlice";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import pointCounter from "../functions/pointCounter";

function Shop() {
  const cartValue = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <Stack className="col-md-5 mx-auto" direction="vertical" gap={3}>
      {productList.map((product) => (
        <Card style={{ width: "18rem" }} key={product.id}>
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
}

export default Shop;
