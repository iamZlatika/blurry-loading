import React, { useEffect, useState } from "react";
import "./style.css";

const App = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    if (load < 100) {
      const inttervalLoad = setInterval(() => {
        setLoad((l) => l + 1);
      }, 30);
      return () => clearInterval(inttervalLoad);
    }
  }, [load]);

  const scale = (number: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  return (
    <>
      <section className="bg" style={{ filter: `blur(${scale(load, 0, 100, 30, 0)}px)` }}></section>
      <div className="loading-text" style={{ opacity: `${scale(load, 0, 100, 1, 0)}` }}>
        {load}%
      </div>
    </>
  );
};

export default App;
