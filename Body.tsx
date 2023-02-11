import * as React from 'react';
import style from './styles/Body.module.css';
import Offers from './Offers';
import Info from './Info';
import Screen from './Screen';


export default function Body() {
  return (
    <div>
      <Screen />
      <Offers/>
      <Info />
    </div>
  );
}