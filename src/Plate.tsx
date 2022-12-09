import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Bar.css'

function Plate(props :{Color: string, Size: number}) {

    function getWidth(){
        var width;

        switch(props.Color){
            case 'Silver':
                width = 3;
                break;
            case 'Black':
                width = 6;
                break;
            default:
                width = 10;
        }

        return width;
    }


    return (<div style={{backgroundColor: props.Color, width:getWidth(), height: props.Size * 1.5 + "Px", border:"1px black solid", borderRadius: "2.5px"}}></div>);
}

export default Plate;

