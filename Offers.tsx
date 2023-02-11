import * as React from 'react';
import style from './styles/Body.module.css'
import Offer from './Offer'


export default function Offers() {
  return (
    <div className={style.offersBody}>
    <h2> Offers </h2>
    <div className={style.offersInsideStyles}>
    <Offer number={1} planet={'Venus'} value={300} color={'pink'} />
    <Offer number={2} planet={'Jupiter'} value={400} color={'blue'} />
    <Offer number={3} planet={'Mercury'} value={600} color={'yellow'}/>
    </div>
    </div>
  );
}