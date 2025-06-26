import React from "react";
import storeItems from "../data/storeItems.json";
import { StoreItem } from "../components/StoreItem";
import { Col, Row } from "react-bootstrap";

export function Store() {
  return (
    <Row xs={1} md={2} lg={3} className="g-3">
      {storeItems.map((storeItem) => (
        <Col key={storeItem.id}>
          <StoreItem {...storeItem} />
        </Col>
      ))}
    </Row>
  );
}
