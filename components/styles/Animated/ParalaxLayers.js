import React from "react";
import ParalaxEffect from "./ParalaxEffect";

const Paralaxlayers = ({layers}) => {
  return (
    <>
      {layers.map((layer, index) => (
        <ParalaxEffect
          key={`layer_${index}`}
          image={layer}
          imageLayers={index + 1}
        />
      ))}
    </>
  );
};

export default Paralaxlayers;
