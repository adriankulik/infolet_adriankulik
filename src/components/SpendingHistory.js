import React from "react";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import pointCounter from "../functions/pointCounter";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

export default function SpendingHistory() {
  const dataAddress = "mockClientHistoryAPIResponse.json";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(dataAddress).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Container>
        <Row className="mb-5"></Row>
        <Row className="mb-5"></Row>
        <Row className="mb-5 justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    );
  }

  return (
    <Stack className="col-md-5 mx-auto pt-5" direction="vertical" gap={3}>
      <Row className=".mb-5"></Row>
      {data.map((item) => (
        <Card key={item.id}>
          <Card.Body>
            <Card.Title>{item.month}</Card.Title>
            <Card.Text>You've spent: ${item.amountSpent}</Card.Text>
            <Card.Text>Your points: {pointCounter(item.amountSpent)}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
}
