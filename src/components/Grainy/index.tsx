import Script from "next/script";

import React, { useEffect, useRef, useState } from "react";

import "./grainy.css";

export default function Grainy() {
  /*
  background-color :rgb(204, 204, 204)
  */
  const grainedContainerRef = useRef(null);
  const [isGrainedLoaded, setIsGrainedLoaded] = useState(false);

  useEffect(() => {
    if (isGrainedLoaded && grainedContainerRef.current) {
      const options = {
        animate: false,
        patternWidth: 300,
        patternHeight: 300,
        grainOpacity: 0.02,
        grainDensity: 0.1,
        grainWidth: 3,
        grainHeight: 3,
        grainChaos: 0.2,
        grainSpeed: 1,
      };

      grained("#container-grainy", options);
    }
  }, [isGrainedLoaded]);

  return (
    <div id="container-main">
      <div
        ref={grainedContainerRef}
        id="container-grainy"
        style={{ backgroundColor: "#1B2A2E" }}
      >
        <div className="grained" style={{ backgroundColor: "#1B2A2E" }}>
          <h1>hi</h1>
        </div>
      </div>
      <Script src="/grained.js" onLoad={() => setIsGrainedLoaded(true)} />
    </div>
  );
}
