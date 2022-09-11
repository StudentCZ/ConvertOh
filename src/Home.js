import React from 'react';
import { useState } from 'react';
import style from './Home.module.css';
import Temp from './Temp';

function Home() {
  const [showTemp, setShowTemp] = useState(false);
  const TempOn = () => setShowTemp(true);
  const [showCurrency, setShowCurrency] = useState(false);
  const CurrencyOn = () => setShowCurrency(true);

  return (
    <>
      <h1>ConvertOh</h1>
      <h2>A Conversion Calulator</h2>
      <div className={style.border}>
        <nav className={style.navLink}>
          <li className={style.link} onClick={TempOn}>
            Temp
          </li>
          <li className={style.link} onClick={CurrencyOn}>
            Currency
          </li>
          <li className={style.link}>Measurement</li>
        </nav>
        {showTemp ? <Temp /> : null}
        {showCurrency ? <Currency /> : null}
      </div>
    </>
  );
}

export default Home;
