import React, { useEffect, useRef } from "react";
import "./styles.css";

const DynamicGraph = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const animateLine = () => {
      const svg = svgRef.current;
      const line = svg.querySelector(".line");
      const length = line.getTotalLength();
      line.style.transition = line.style.WebkitTransition = "none";
      line.style.strokeDasharray = length + " " + length;
      line.style.strokeDashoffset = length;
      line.getBoundingClientRect();
      line.style.transition = line.style.WebkitTransition =
        "stroke-dashoffset 2s ease-in-out";
      line.style.strokeDashoffset = "0";
    };

    animateLine();
  }, []);

  const generateSinusoidalPoints = () => {
    const amplitude = 50; // amplitude of the wave
    const frequency = 0.1; // frequency of the wave
    const points = [];

    for (let x = 0; x <= 100; x++) {
      const y = amplitude * Math.sin(frequency * x) + 50; // 50 to center the wave vertically
      points.push(`${x},${y}`);
    }

    return points.join(" ");
  };

  return (
    <svg ref={svgRef} className="graph">
      <polygon
        points={`0,100 ${generateSinusoidalPoints()} 200,200`}
        fill="white"
      />
      <polyline points={generateSinusoidalPoints()} className="line" />
    </svg>
  );
};

export default DynamicGraph;
