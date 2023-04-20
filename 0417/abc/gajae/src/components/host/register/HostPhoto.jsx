import React from "react";
import { Accordion, Card, Form } from "react-bootstrap";

const HostPhoto = () => {
  return (
    <div>
      <Accordion.Item eventKey="2">
        <Accordion.Header>사진</Accordion.Header>
        숙소의 사진을 추가해주세요.
        <Accordion.Body>
          <Card style={{ width: "55rem", margin: "5% auto" }}>
            <Card.Body>
              <Card.Title>최소 3장의 사진을 업로드 해주세요.</Card.Title>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default HostPhoto;
