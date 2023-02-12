import * as React from 'react';
import style from './styles/Screen.module.css'
import Calendar from './Calendar'
import Tasks from './Tasks'


export default function Screen() {
  return (
    <div className={style.screenBackground}>
      <Calendar />
      <Tasks />
    </div>
  );
}