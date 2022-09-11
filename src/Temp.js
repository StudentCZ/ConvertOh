import React, { useState } from 'react';

function Temp() {
  const [temp, setTemp] = useState({ f: null, c: null });
  const setC = (e) => {
    setTemp({
      c: e.target.value,
      f: ((+e.target.value * 9) / 5 + 32).toFixed(2),
    });
  };
  const setF = (e) => {
    setTemp({
      c: (((+e.target.value - 32) * 5) / 9).toFixed(2),
      f: e.target.value,
    });
  };
  return (
    <>
      <h1>Temp</h1>
      <input type='number' onChange={setF}></input>

      <select>
        <option value={temp.f}>Fahrenheit</option>
        <option value={temp.c}>Celsius</option>
      </select>

      <input type='number' value={temp.c} onChange={setC}></input>

      <select>
        <option>Celsius</option>
      </select>
    </>
  );
}

export default Temp;
