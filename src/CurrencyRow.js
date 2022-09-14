import React from 'react';
import style from './CurrencyRow.module.css';

function CurrencyRow() {
  return (
    <div>
      <input type='number' className={style.input} />
      <select>
        <option value='test'>test</option>
      </select>
    </div>
  );
}

export default CurrencyRow;
