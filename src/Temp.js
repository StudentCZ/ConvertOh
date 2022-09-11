import React, { useState } from 'react';

const temps = ['Fahrenheit', 'Celcius'];

function Temp() {
  return (
    <>
      <h1>Temp</h1>
      <input></input>
      {temps.map((ele) => (
        <select key='id'>
          <option>{ele}</option>
        </select>
      ))}
    </>
  );
}

export default Temp;
