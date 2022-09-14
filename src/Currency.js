import React, { useEffect } from 'react';
import CurrencyRow from './CurrencyRow';
import style from './Currency.module.css';

const EXCHANGE_URL = `https://api.exchangerate.host/latest`;

function Currency() {
  useEffect(() => {
    fetch(EXCHANGE_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
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
