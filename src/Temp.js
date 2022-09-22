import React, { useState } from 'react';

function Temp() {
  const [temp, setTemp] = useState({ f: 0, c: 32 });
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
      <div>
        <h1>Convert</h1>
        <input type='number' value={temp.f} onChange={setF}></input>

        <select>
          <option value={temp.f}>Fahrenheit</option>
        </select>
      </div>

      <div>
        <input type='number' value={temp.c} onChange={setC}></input>

        <select>
          <option>Celsius</option>
        </select>
      </div>
    </>
  );
}

export default Temp;
