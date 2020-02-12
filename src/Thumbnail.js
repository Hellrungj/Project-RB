import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Thumbnail(props) {
  // console.log(props);
  return (
    <Card style={{ width: "18rem" }} md={4}>
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/300x200.jpeg/55595c/ffffff/?text=Thumbnail"
      />
      <Card.Body>
        <Card.Title>Card Title #1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Button
              href={"/product/" + props.id}
              variant="btn btn-sm btn-outline-secondary"
            >
              View
            </Button>
            <Button variant="btn btn-sm btn-outline-secondary">Edit</Button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </Card.Body>
    </Card>
  );
}
