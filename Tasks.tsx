import * as React from 'react';
import style from './styles/Body.module.css'
import TaskComponent from './TaskComponent'



export default function Tasks() {
  return (
    <div style={{width:'50%', marginRight:'70px', marginTop:'100px'}}>
        <TaskComponent name={'ToDos'} icon={'🗎'} isOn={true} color={'orange'} />
        <TaskComponent name={'Spending'} icon={'$'} isOn={true} color={'lightgreen'} />
        <TaskComponent name={'Sleeping Schedule'} icon={'☽'} isOn={true} color={'skyblue'} />
    </div>
  );
}