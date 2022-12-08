import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Bar.css'
function Plate(props :{Color: string, Size: number}) {
    return (<div style={{backgroundColor: props.Color, width:"10px", height: props.Size * 1.5 + "Px", border:"1px black solid"}}></div>);
}

export default Plate;

