import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const MapForm = (props: any) => {
  return (
    <FormControl>
      <InputLabel htmlFor="map-name">Map Name</InputLabel>
      <Input id="map-name" placeholder="Baldur's Gate" />
      <InputLabel htmlFor="map-url">Map URL</InputLabel>
      <Input
        id="map-url"
        placeholder="https://www.host.com/path-to-image.jpg"
      />
      <Button color="primary" type="submit">
        Submit
      </Button>
    </FormControl>
  );
};

export default MapForm;
