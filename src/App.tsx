import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './Bar';
import { setEmitFlags } from 'typescript';

function App() {

  const [weight, setWeight] = useState(25);
  const [RedPlates, SetRedPlates] = useState(true);
  const [Collars, SetCollars] = useState(true);
  const [BarWeight, setBarWeight] = useState(20);

 

  

  return (
    <div className="App">
      <header className="App-header">
       <h4 style={{margin:'0px'}}>Hypnos Bar Loader</h4>

       <div  className='ButtonBar'>
        <label className='CheckBoxField'>Red Plates<input className='ButtonBarInput' type="checkbox" defaultChecked={true} onChange={()=>SetRedPlates(!RedPlates)}/></label>
        <label className='CheckBoxField'>Collars<input className='ButtonBarInput'  type="checkbox"  defaultChecked={true} onChange={()=>SetCollars(!Collars)}/></label>
        <label className='CheckBoxField'>Bar Weight<input className='ButtonBarInput' type="number" defaultValue={20} min={5} max={30} step={2.5} onChange={(event)=>{setBarWeight(Number(event.target.value))}}/></label>
       </div>

       <input className="WeightInput"type={"number"} step={2.5} min={Collars? 25:20} defaultValue={Collars? 25:20} onChange={(event)=>{setWeight(Number(event.target.value))}}></input>

       <div className='BarArea'>
          <Bar Weight={weight} Reds={RedPlates} Collars={Collars} BarWeight={BarWeight}></Bar>
       </div>

        <div className='Legend'>
          <div className='LegendIcon'>Red: 25kg <div className='tile' style={{backgroundColor:'red'}}></div></div>  
          <div className='LegendIcon'>Blue: 20kg <div className='tile' style={{backgroundColor:'blue'}}></div></div>  
          <div className='LegendIcon'>Yellow: 15kg <div className='tile' style={{backgroundColor:'Yellow'}}></div></div>  
          <div className='LegendIcon'>Green: 10kg <div className='tile' style={{backgroundColor:'Green'}}></div></div>
          <div className='LegendIcon'>White: 5kg <div className='tile' style={{backgroundColor:'White'}}></div></div>  
          <div className='LegendIcon'>Black: 2.5kg <div className='tile' style={{backgroundColor:'Black'}}></div></div>  
          <div className='LegendIcon'>Silver: 1.25kg <div className='tile' style={{backgroundColor:'Silver'}}></div></div>  
          <div className='LegendIcon'>Collar: 2.5kg<div className='tile' style={{backgroundColor:'dimgray'}}></div></div>  

        </div>

      </header>
    </div>
  );
}

export default App;
