import * as React from 'react';
import { useState } from 'react';
import style from './styles/Task.module.css'



export default function  Spending({color}){

  const [amount, setAmount] = useState(0);
  const [todoList, setTodoList] = useState([])


  const decrease = () => {
    if(amount > 0){
    let amountIncrease = amount - 10
    setAmount(amountIncrease);
    }
  }
  const increase = () => {
    let amountIncrease = amount + 10
    setAmount(amountIncrease);
  }
  const Parentdiv = {
    height: '8vw',
    width: '8vw',
    borderRadius: 40,
    margin: 50,
    background: `conic-gradient(${color} ${amount*2}deg, transparent ${amount/amount}deg)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  }
  
  const Childdiv = {
    height: '6vw',
    width: '6vw',
   borderRadius:40,
    backgroundColor:'black',
    color:"white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  }



  return(

    <div className={style.wrapperRow} style={{color:color, paddingLeft:'20px', paddingRight:'20px'}}>
      <div className={style.wrapperMain} 
      ><div style={{marginBottom:'20px', fontWeight:'bold'}}>Amount</div>
      <div className={style.wrapperRow} style={{marginBottom:'40px'}}>
        <button className={style.amountButton} style={{borderColor:color, color:color}}
        onClick={decrease}>-</button>
        <div style={{color:'white'}}>
        {amount}
        </div>
        <button className={style.amountButton} style={{borderColor:color, color:color}}
        onClick={increase}>+</button>
      </div>
      </div>
      <div className={style.wrapperMain}><div style={{marginBottom:'20px', fontWeight:'bold'}}> Percent </div>
      <div style={{marginBottom:'40px'}}>
        <div style={Parentdiv}>
          <div style={Childdiv} >600</div>
        </div>
        Circle here</div>
      </div>
    </div>
  )
}