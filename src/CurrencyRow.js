import React from 'react';
import style from './CurrencyRow.module.css';

function CurrencyRow(props) {
  const { currencyOption, selectedCurrency } = props;
  return (
    <div>
      <input type='number' className={style.input} />
      <select value={selectedCurrency}>
        {currencyOption.map((option, id) => (
          <option key={id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
