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
  const [highlight, setHighlight] = React.useState<number | undefined>();

  const setSelectedMap = (mapSrc: MapElement) => {
    selectMap(mapSrc);
    setHighlight(mapSrc.id);
  };
  return (
    <div>
      {mapList.map((singleMap) => {
        const fontWeight = singleMap.id === highlight ? "bold" : "normal";
        return (
          <span
            style={{
              display: "block",
              fontSize: "16px",
              fontWeight: fontWeight,
            }}
            onClick={() => setSelectedMap(singleMap)}
          >
            {singleMap.name}
          </span>
        );
      })}
    </div>
  );
};
