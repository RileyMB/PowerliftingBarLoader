import React, { useState } from 'react';
import './App.css';
import './Bar.css'

function Collar(props: { side: number, Plates: any[], on: boolean, Instruction: boolean, HalfBar: boolean }) {

    var HalfBarCollarWidth = 15
    //calculates the left over width on the bar past the collars
    function getWidth() {
        var plateWidth = 1;
        props.Plates.forEach(plate => {
            switch (plate[0]) {
                case 'Silver':
                    plateWidth += 4;
                    break;
                case 'Black':
                    plateWidth += 6;
                    break;
                case 'Red':
                    plateWidth += 12;
                    break;
                default:
                    plateWidth += 10;
            }

        });
        // length*2 for border on plates
        let width = 80 - (plateWidth) - (props.Plates.length * 2) - (props.on ? -0 : -21)

        if(props.HalfBar){
            return width 
        }
        else{
            return 'calc(4vw + ' + width*0.5 + 'px)'
        }
       
    }

    return (<div style={{ display: "flex", alignItems: "center", flexDirection: props.side == 1 ? "row" : "row-reverse" }}>

        {/* DRAW COLLAR IF COLLARS ARE ON */}
        {props.on ? <div style={{ background: "var(--barColor)", width: props.HalfBar? "15px" : "calc(0.75vw)", height: props.HalfBar? "25px": "2vw", border: "1px solid rgb(36, 36, 36)" }}></div> : <></>}
        {/* DRAW REST OF BAR IF NOT AN INSTRUCTION */}
        {!props.Instruction? <div style={{ background: "var(--barColor)", width: getWidth(), height: props.HalfBar? "10px": "0.5vw", margin: "0px", border: "1px solid rgb(36, 36, 36)" }}></div> : <></>}
    </div>);
}

export default Collar;

