import * as React from 'react';
import style from './styles/Navbar.module.css'


export default function Navbar() {
  return (
    <div className={style.background}>
    <h3>Organiser App</h3>
    <div>
      <button className={style.buttons + ' ' + style.buttonLearnMore}> Learn more </button>
      <button className={style.buttons + ' ' + style.buttonContactUs}> Report an error </button>
    </div>
    </div>
  );
}