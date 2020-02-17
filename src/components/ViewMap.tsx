import * as React from "react";

interface ViewMapProps {
  src: string;
}

const ViewMap = (props: ViewMapProps) => {
  return (
    <div>
      <img src={props.src} alt="map" />
    </div>
  );
};

export default ViewMap;
