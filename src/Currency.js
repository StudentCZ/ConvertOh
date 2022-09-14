import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';
import style from './Currency.module.css';

const EXCHANGE_URL = `https://api.exchangerate.host/latest`;

function Currency() {
  const [currencyOption, setCurrencyOption] = useState([]);
  console.log(currencyOption);

  useEffect(() => {
    fetch(EXCHANGE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOption([data.base, ...Object.keys(data.rates)]);
      });
  }, []);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className={style.equals}>=</div>
      <CurrencyRow />
    </>
  );
}

export default Currency;
