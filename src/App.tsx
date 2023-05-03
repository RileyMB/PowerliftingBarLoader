import React, { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './Bar';
import 'react-data-grid/lib/styles.css';
import ReactDataGrid, { Column, SelectColumn, SortColumn, textEditor } from 'react-data-grid';
import { Direction } from './types';
import Instructions from './Instructions';



interface Row {
  name: string;
  class: string;
  weight: number;
  age: number;
  S1: number;
  S2: number;
  S3: number;
  B1: number;
  B2: number;
  B3: number;
  D1: number;
  D2: number;
  D3: number;
}



function App() {

  const [weight, setWeight] = useState(25);
  const [RedPlates, SetRedPlates] = useState(true);
  const [Collars, SetCollars] = useState(true);
  const [BarWeight, setBarWeight] = useState(20);




  return (
    <div className="App">
      <section className="App-section" style={{width: "67%"}}>
        <div className='ButtonBar'>
          <label className='CheckBoxField'>Red Plates<input className='ButtonBarInput' type="checkbox" defaultChecked={true} onChange={() => SetRedPlates(!RedPlates)} /></label>
          <label className='CheckBoxField'>Collars<input className='ButtonBarInput' type="checkbox" defaultChecked={true} onChange={() => SetCollars(!Collars)} /></label>
          <label className='CheckBoxField'>Bar Weight<input className='ButtonBarInput' type="number" defaultValue={20} min={5} max={30} step={2.5} onChange={(event) => { setBarWeight(Number(event.target.value)) }} /></label>
        </div>

        <div className='weight-enter-area'>
          <a>Enter your weight:</a>
          <input className="WeightInput" type={"number"} step={2.5} min={Collars ? 25 : 20} defaultValue={Collars ? 25 : 20} onChange={(event) => { setWeight(Number(event.target.value)) }}></input>
        </div>

        <div className='BarArea'>
          <Bar Weight={weight} Reds={RedPlates} Collars={Collars} BarWeight={BarWeight}></Bar>
        </div>

        <div className='Legend'>
          <div className='LegendIcon'>25kg <div className='tile' style={{ backgroundColor: 'red' }}></div></div>
          <div className='LegendIcon'>20kg <div className='tile' style={{ backgroundColor: 'blue' }}></div></div>
          <div className='LegendIcon'>  15kg <div className='tile' style={{ backgroundColor: 'Yellow' }}></div></div>
          <div className='LegendIcon'> 10kg <div className='tile' style={{ backgroundColor: 'Green' }}></div></div>
          <div className='LegendIcon'> 5kg <div className='tile' style={{ backgroundColor: 'White' }}></div></div>
          <div className='LegendIcon'> 2.5kg <div className='tile' style={{ backgroundColor: 'Black' }}></div></div>
          <div className='LegendIcon'>  1.25kg <div className='tile' style={{ backgroundColor: 'Silver' }}></div></div>
          <div className='LegendIcon'>  2.5kg<div className='tile' style={{ backgroundColor: 'dimgray' }}></div></div>

        </div>
      </section>

      <section className="App-section" style={{width: "33%", borderLeft: "5px dashed darkGrey"}}>
        <div>
          INTRUCTIONS:
        </div>
        <Instructions Weight={weight} Reds={RedPlates} Collars={Collars} BarWeight={BarWeight}></Instructions>

      </section>

    </div>
  );
}

export default App;
