import * as React from 'react';
import style from './styles/Component.module.css'



export default function Calendar() {
  return (
    <div className={style.calendar}>
        <iframe src="https://calendar.google.com/calendar/embed?src=ro.new_zealand%23holiday%40group.v.calendar.google.com&ctz=Europe%2FBucharest" style={{width:'300px', height:'300px'}}></iframe>
    </div>
  );
}