import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MapForm = (props: any) => {
  return (
    <Form>
      <Form.Group controlId="mapName">
        <Form.Label>Map Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group controlId="mapUrl">
        <Form.Label>Map URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="https://www.host.com/path-to-image.jpg"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MapForm;
