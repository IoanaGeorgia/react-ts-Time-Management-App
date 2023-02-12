import * as React from 'react';
//import style from './styles/Body.module.css'
import TaskComponent from './TaskComponent'



export default function Tasks() {
  return (
    <div>
        <TaskComponent name={'ToDos'} isOn={true} />
    </div>
  );
}