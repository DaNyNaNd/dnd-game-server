import * as React from "react";

interface MapElement {
  id: number;
  name: string;
  src: string;
}

interface MapListProps {
  mapList: Array<MapElement>;
  selectMap: any;
}

export const MapList = (props: MapListProps) => {
  const { mapList, selectMap } = props;

  const setSelectedMap = (mapSrc: Object) => {
    console.log("mapSrc", mapSrc);
    selectMap(mapSrc);
  };
  return (
    <div>
      {mapList.map((singleMap) => (
        <span
          style={{ display: "block", fontSize: "16px" }}
          onClick={() => setSelectedMap(singleMap)}
        >
          {singleMap.name}
        </span>
      ))}
    </div>
  );
};
