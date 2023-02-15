import * as React from 'react';
import { useState } from 'react';
import style from './styles/Task.module.css'



export default function  Spending({color}){


  return(

    <div className={style.wrapperRow} style={{color:color, paddingLeft:'20px', paddingRight:'20px'}}>
      <div className={style.wrapperMain} 
      ><div style={{marginBottom:'20px', fontWeight:'bold'}}>Amount</div>
      <div className={style.wrapperRow} style={{marginBottom:'40px'}}>
        <button>-</button>
        100
        <button>+</button>
      </div>
      </div>
      <div className={style.wrapperMain}><div style={{marginBottom:'20px', fontWeight:'bold'}}> Percent </div>
      <div style={{marginBottom:'40px'}}>Circle here</div>
      </div>
    </div>
  )
}