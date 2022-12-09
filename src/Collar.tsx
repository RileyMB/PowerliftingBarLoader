import React, { useState } from 'react';
import './App.css';
import './Bar.css'

function Collar(props: {side: number, Plates:any[], on:boolean}) {

    //calculates the left over width on the bar past the collars
    function getWidth(){
        var plateWidth = 1;
        props.Plates.forEach(plate => {
            switch(plate[0]){
                case 'Silver':
                    plateWidth += 3;
                    break;
                case 'Black':
                    plateWidth += 6;
                    break;
                default:
                    plateWidth += 10;
            }
    
        });
        //length*2 for border on plates
        let width = 125 - (plateWidth) - (props.Plates.length * 2) - (props.on? -0 : -22)
        return width
    }

    return (<div style={{display:"flex", alignItems:"center", flexDirection: props.side== 1? "row" : "row-reverse"}}>

                {props.on? <div style={{backgroundColor:"Dimgray", width: "20px", height:"30px", border:"1px solid black"}}></div> : <></> }
                <div style={{backgroundColor:"Dimgray", width: getWidth(), height:"8px", margin:"-1px", border:"1px solid black"}}></div>
           </div>);
}

export default Collar;

