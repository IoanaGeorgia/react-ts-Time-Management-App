import * as React from 'react';
//import style from './styles/Body.module.css'



export default function TaskComponent({name, isOn}) {
  return (
    <div>
      <span>{name}</span>
    </div>
  );
}