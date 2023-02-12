import * as React from 'react';
import { useState } from 'react';
import style from './styles/Component.module.css'
import Todos from './Todos'



export default function TaskComponent({name,icon, isOn, color}) {
  const [button, setButton] = useState(true);
  const [expand, setExpand] =useState(false)

  return (
    <div className={style.componentWrapper}  style={{
      borderColor:color}}>
    <div className={style.componentLayout}>
        <div className={style.titleWrapper}>
      <span className={style.title}>{name}</span>
      <div className={style.icon} style={{color: color}}>{icon}</div>
      </div>
      <div className={style.buttonWrapper}>

      <label className={style.mainButton}>  
       <input type="checkbox" onClick={()=>setButton(!button)}/>



       <span className={style.buttonSlider}  style={ button ? {backgroundColor: color} : {backgroundColor: 'grey'}}></span>
    </label>
    <button className={style.collapseButton} onClick={()=>setExpand(!expand)}>⤽</button>

    </div>
    </div>
        {expand && name=='ToDos' && (
          <Todos />
        )}
        {expand && name=='Spending' && (
          <h1>bbbbbbbb</h1>
        )}
                {expand && name=='Sleeping Schedule' && (
          <h1>bbbbbbbb</h1>
        )}
        </div>
  );
}