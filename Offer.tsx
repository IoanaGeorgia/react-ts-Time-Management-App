import * as React from 'react';
import style from './styles/Body.module.css'


export default function Offer({number, planet, value, color}) {
  return (
    <div className={style.offerBody}>
    <h3>Offer #<span style={{color: color}}>{number}</span></h3>
    <div>
      <h5>Welcome to <span style={{color: color}}>{planet}</span>! </h5>
      <p> Lormnbs jhfjf rjhjhfgje wkfjsjhfk wekhfkje jhdbfsfe ffgfgere
React components use props to communicate with each other. </p>
      <h4><span style={color={color}}>{value}$</span></h4>
      <button className={style.buttons} style={{color:color}}> Buy now </button>
    </div>
    </div>
  );
}