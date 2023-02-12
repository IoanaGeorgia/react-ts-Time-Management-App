import * as React from 'react';
import style from './styles/Body.module.css'



export default function TaskComponent({name, isOn}) {
  return (
    <div className={style.offersBody}>
      <span>{name}</span>
    </div>
  );
}