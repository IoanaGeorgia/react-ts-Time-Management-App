import * as React from 'react';
import { useState } from 'react';
import style from './styles/Task.module.css'



export default function Todos({color}) {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([])
  const [visible, setVisible] = useState(true)

  const addTask = (event) => {
    const id = todoList.length + 1;
    if (event.key === 'Enter'){
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      },
    ]);
    setInput("");
  };}
  const killTask = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div className={style.wrapperMain} style={{color:'white'}}>
      <div>Counter:{todoList.length}</div>
      <div className={style.wrapper}>

        <input style={{backgroundColor:'black', border:'2px solid grey', padding:'3px', color:'white', borderRadius:'10px'}} value={input}  type='text' onInput={(e) =>setInput(e.target.value)} onKeyDown={addTask} />    
      

        <div>
  {visible && todoList.map((todo) => {
   return (
    
      <div style={{width:'100%', marginTop:'10px'}}>
      <span>➜</span> 
      <span className={style.task}>
      {todo.task}
      </span>
      <button className={style.deleteTask} style={{color: color}}>✖</button>
     </div>
   
    );
  })}
 </div>        
      </div>
    </div>
  );
}