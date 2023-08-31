import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Bar.css'
import HalfBar from './HalfBar';

function Plate(props: { Color: string, Size: number, HalfBar: boolean }) {

    function getWidth() {
        var width;

        switch (props.Color) {
            case 'Silver':
                width = 4;
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

        if(props.HalfBar){
            return width
        }
        else{
            return 'calc(0.05vw * ' + width + ')';
        }
      
    }

    function getColor() {
        var color;
        
        switch (props.Color) {
            case 'Silver':
                color = 'Silver';
                break;
            case 'Black':
                color = 'Black';
                break;
            case 'Yellow':
                color = '#969600';
                break;
            case 'Red':
                color = '#990000'
                break;
            default:
                color = props.Color;
        }

        return color
      
    }

    // props.Size * 1.5 + "Px"
    function getHeight() {
        var height
        
        if(props.HalfBar){
            height = props.Size
        }
        else{
             height = 'calc(' + props.Size + "* 0.095vw)"
        }
       
        return (height)
    }
    return (<div style={{

        background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 51%, rgba(36,36,36,0.90) 100%)",
        backgroundColor: getColor(),
        width: getWidth(),
        height: getHeight(),
        border: "1px black solid",
        borderRadius: "2.5px"
    }}>
    </div>);
}

export default Plate;

