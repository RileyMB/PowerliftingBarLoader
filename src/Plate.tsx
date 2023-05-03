import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Bar.css'

function Plate(props: { Color: string, Size: number }) {

    function getWidth() {
        var width;

        switch (props.Color) {
            case 'Silver':
                width = 3;
                break;
            case 'Black':
                width = 6;
                break;
            case 'Red':
                width = 12
                break;
            default:
                width = 10;
        }

        return width;
    }

    return (<div style={{ 
      
        background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 51%, rgba(46,46,46,0.66) 100%)", 
        backgroundColor: props.Color, 
        width: getWidth(), 
        height: props.Size * 1.5 + "Px", 
        border: "1px black solid", 
        borderRadius: "2.5px" }}>
        </div>);
}

export default Plate;

