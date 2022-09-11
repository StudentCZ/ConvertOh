import React, { useState } from 'react';

function Temp() {
  const [temp, setTemp] = useState({ f: null, c: null });
  const [fromTemp, setFromTemp] = useState(null);
  const [toTemp, setToTemp] = useState(null);

  const setC = (e) =>
    setTemp({ c: e.target.value, f: (e.target.value * 9) / 5 + 32 });
  const setF = (e) =>
    setTemp({ c: ((e.target.value - 32) * 5) / 9, f: e.target.value });
  return (
    <>
      <h1>Temp</h1>
      <input type='number' value={temp.f} onChange={setC}></input>

      <select>
        <option>Fahrenheit</option>
      </select>

      <input type='number' value={temp.c} onChange={setF}></input>

      <select>
        <option>Celsius</option>
      </select>
    </>
  );
}

export default Temp;
