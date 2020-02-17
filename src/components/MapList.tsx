import * as React from "react";

interface MapElement {
  name: string;
  src: string;
}

interface MapListProps {
  mapList: Array<MapElement>;
}

const MapList = (props: MapListProps) => (
  <div>
    <ul>
      {props.mapList.map(singleMap => (
        <li>{singleMap.name}</li>
      ))}
    </ul>
  </div>
);

export default MapList;
