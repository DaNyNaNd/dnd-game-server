import React from "react";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";

const MapForm = (props: any) => {
  return (
    <Form>
      <FormGroup controlId="mapName">
        <Form.Label>Map Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </FormGroup>
      <FormGroup controlId="mapUrl">
        <Form.Label>Map URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="https://www.host.com/path-to-image.jpg"
        />
      </FormGroup>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MapForm;
