import * as React from 'react';
import style from './styles/Navbar.module.css'


export default function Navbar() {
  return (
    <div className={style.background}>
    <h3>OuterSpace</h3>
    <div>
      <button className={style.buttons + ' ' + style.buttonLearnMore}> Learn more </button>
      <button className={style.buttons + ' ' + style.buttonContactUs}> Contact us </button>
    </div>
    </div>
  );
}