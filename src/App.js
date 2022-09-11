import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './App.module.css';

function App() {
  return (
    <>
      <h1>ConvertOh</h1>
      <h2>A Conversion Calulator</h2>
      <div className={style.border}>
        <nav className={style.navLink}>
          <li className={style.link}>Temp</li>
          <li className={style.link}>Currency</li>
          <li className={style.link}>Measurement</li>
        </nav>
      </div>
    </>
  );
}

export default App;
