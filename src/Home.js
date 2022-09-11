import React from 'react';
import { useState } from 'react';
import style from './Home.module.css';
import Temp from './Temp';
import Currency from './Currency';
import Measurement from './Measurement';

function Home() {
  const [showTemp, setShowTemp] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);
  const [showMeasurement, setShowMeasurement] = useState(false);
  const HandleClick = () => {
    setShowTemp(true);
    setShowCurrency(false);
    setShowMeasurement(false);
  };
  const HandleClick2 = () => {
    setShowCurrency(true);
    setShowTemp(false);
    setShowMeasurement(false);
  };
  const HandleClick3 = () => {
    setShowMeasurement(true);
    setShowTemp(false);
    setShowCurrency(false);
  };
  return (
    <>
      <h1>ConvertOh</h1>
      <h2>A Conversion Calulator</h2>
      <div className={style.border}>
        <nav className={style.navLink}>
          <li className={style.link} onClick={HandleClick}>
            Temp
          </li>
          <li className={style.link} onClick={HandleClick2}>
            Currency
          </li>
          <li className={style.link} onClick={HandleClick3}>
            Measurement
          </li>
        </nav>
        {showTemp ? <Temp /> : null}
        {showCurrency ? <Currency /> : null}
        {showMeasurement ? <Measurement /> : null}
      </div>
    </>
  );
}

export default Home;
