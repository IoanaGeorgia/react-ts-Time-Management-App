import * as React from 'react';
import { useState } from 'react';
import style from './styles/Component.module.css'



export default function Calendar() {
  const [expand, setExpand] =useState(false)
  const date= new Date()
  const day = date.getDate()

  return (
    <div className={style.calendar}>
      <button className='buttonToggleCalendar' onClick={()=>setExpand(!expand)}>Open Calendar</button>

      {expand && (
                <iframe src="https://calendar.google.com/calendar/embed?src=ro.new_zealand%23holiday%40group.v.calendar.google.com&ctz=Europe%2FBucharest" style={{width:'300px', height:'300px'}}></iframe>
         )} 

        <div className={style.today}>

            <div style={{color:'pink', fontWeight:'bolder', fontSize:'20px'}}>
            {day}
            </div>
          </div>
    </div>
  );
}