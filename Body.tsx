import * as React from 'react';
import style from './styles/Body.module.css';
import Offers from './Offers';
import Info from './Info'


export default function Body() {
  return (
    <div>
      <Offers/>
      <Info />
    </div>
  );
}