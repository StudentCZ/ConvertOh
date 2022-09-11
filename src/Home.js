import React from 'react';
import { useState } from 'react';
import style from './Home.module.css';
import { Link } from 'react-router-dom';
import Temp from './Temp';

function Home() {
  const [showTemp, setShowTemp] = useState(false);
  const onClick = () => setShowTemp(true);
  return (
    <>
      <h1>ConvertOh</h1>
      <h2>A Conversion Calulator</h2>
      <div className={style.border}>
        <nav className={style.navLink}>
          <li className={style.link} onClick={onClick}>
            Temp
          </li>
          <li className={style.link}>Currency</li>
          <li className={style.link}>Measurement</li>
        </nav>
        {showTemp ? <Temp /> : null}
      </div>
    </>
  );
}

export default Home;
