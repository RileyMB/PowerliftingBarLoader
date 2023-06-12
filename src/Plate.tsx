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

        background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 51%, rgba(46,46,46,0.66) 100%)",
        backgroundColor: props.Color,
        width: getWidth(),
        height: getHeight(),
        border: "1px black solid",
        borderRadius: "2.5px"
    }}>
    </div>);
}

export default Plate;

