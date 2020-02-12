import React from "react";
import Thumbnail from "./Thumbnail";
import { Container, Row, Col } from "react-bootstrap";

export default function ThumbnailList() {
  const nums = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "2rem" }}>
      <Container>
        <Row>
          {nums.map((num, i) => (
            <Col md={4} sm={6}>
              {/* {console.log(i)} */}
              <Thumbnail key={i} id={num} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
