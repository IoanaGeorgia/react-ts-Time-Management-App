import * as React from 'react';
import { useState } from 'react';
import style from './styles/Component.module.css'



export default function Calendar() {
  const [expand, setExpand] =useState(false)
  const date= new Date()
  const day = date.getDate()
  const year = date.getFullYear()
  const month= date.getMonth()
  function monthDone(month){
    let monthDone;
    switch (month) {
      case 0:
        monthDone = "January";
        break;
      case 1:
        monthDone = "February";
        break;
      case 2:
        monthDone = "March";
        break;
      case 3:
        monthDone = "April";
        break;
      case 4:
        monthDone = "May";
        break;
      case 5:
        monthDone = "June";
        break;
      case 6:
        monthDone = "July";
    case 7:
      monthDone = "August";
      break;
    case 8:
      monthDone = "September";
      break;
    case 9:
      monthDone = "October";
      break;
    case 10:
      monthDone = "November";
        case 11:
  monthDone = "December";
  break;
}
    return monthDone
  }


  return (
    <div className={style.calendar}>
      
      <button className={style.buttonToggleCalendar} onClick={()=>setExpand(!expand)}>See more</button>

      {expand && (
                <iframe src="https://calendar.google.com/calendar/embed?src=ro.new_zealand%23holiday%40group.v.calendar.google.com&ctz=Europe%2FBucharest" style={{width:'90%', height:'80%'}}></iframe>
                )} 
      {!expand && (
        <div className={style.today}>

            <div style={{color:'hotpink', fontWeight:'bolder', fontSize:'90px', textAlign:'center', height:'55%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            {day}
            </div>


            <div style={{color:'hotpink', fontWeight:'normal', fontSize:'20px', textAlign:'center', height:'20%'}}>
            {monthDone(month)}
            </div>

            <div style={{color:'black', backgroundColor:'hotpink', fontWeight:'bolder', fontSize:'25px', textAlign:'center', height:'15%'}}>
            {year}
            </div>
          </div>
          )} 
    </div>
  );
}