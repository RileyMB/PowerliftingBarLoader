import React, { useState } from 'react';
import './App.css';
import './Bar.css'

function Collar(props: {side: number, numPlates:number, on:boolean}) {

    function getWidth(){
        let width = 125 - (12 * props.numPlates)
        return width
    }

    return (<div style={{display:"flex", alignItems:"center", flexDirection: props.side== 1? "row" : "row-reverse"}}>

                {props.on? <div style={{backgroundColor:"Dimgray", width: "20px", height:"30px", border:"1px solid black"}}></div> : <></> }
                <div style={{backgroundColor:"Dimgray", width: getWidth(), height:"10px", margin:"-1px", border:"1px solid black"}}></div>
           </div>);
}

export default Collar;

