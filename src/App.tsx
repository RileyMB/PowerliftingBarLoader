import { useState } from 'react';
import './App.css';
import Bar from './Bar';
import 'react-data-grid/lib/styles.css';
import Instructions from './Instructions';
import Legend from './Legend';
import HalfBar from './HalfBar';
import arrowL from './images/arrow-L.svg';



function App() {

  const [weight, setWeight] = useState(25);
  const [RedPlates, SetRedPlates] = useState(true);
  const [Collars, SetCollars] = useState(true);
  const [BarWeight, setBarWeight] = useState(20);
  const [showArrowHelper, toggleArrowHelper] = useState(true);


  return (
    <div className="App">
      <section className="App-section" >
       <div>
        {/*****************************************************/}
        <div className='ButtonBar'>
          <label className='CheckBoxField'>Red Plates<input className='ButtonBarInput' type="checkbox" defaultChecked={true} onChange={() => SetRedPlates(!RedPlates)} /></label>
          <label className='CheckBoxField'>Collars<input className='ButtonBarInput' type="checkbox" defaultChecked={true} onChange={() => SetCollars(!Collars)} /></label>
          <label className='CheckBoxField'>Bar Weight<input className='ButtonBarInput' type="number"
            defaultValue={20} min={5} max={35} step={2.5}
            onChange={(event) => {
              if (Number(event.target.value) <= 35) {
                setBarWeight(Number(event.target.value))
              } else {
                setBarWeight(35)
                event.target.value = '35'
              }
            }} />
          </label>
        </div>

        {/*****************************************************/}
        
           


        <div className='weight-enter-area'>
         
          <b>Enter your weight:</b>
          
          <input className="WeightInput" type={"number"} step={2.5} min={Collars ? 25 : 20} max={625} defaultValue={Collars ? 25 : 20}
            onChange={(event) => {
              toggleArrowHelper(false);
              // If input greater than 650 accept else set to 625
              if (Number(event.target.value) <= 625) {
                setWeight(Number(event.target.value))
              }
              else {
                setWeight(625)
                event.target.value = '625'
              }
            }
            }
          />
        <img src={arrowL} className={showArrowHelper?"helperArrow": "helperArrow hide"} alt="Logo" />
        </div>
     </div>
        {/*****************************************************/}

        <div className='BarArea'>
          <Bar Weight={weight} Reds={RedPlates} Collars={Collars} BarWeight={BarWeight}></Bar>
          <HalfBar Weight={weight} Reds={RedPlates} Collars={Collars} BarWeight={BarWeight}></HalfBar>
        </div>
        {/*****************************************************/}

        <Legend></Legend>

        <div className='mobile-scroll-popup'>↓</div>
      </section>

      <section className="App-section instruction-wrapper">
        <div >
          <h2>INTRUCTIONS</h2>
          <h4>PER SIDE</h4>

        </div>
        <div className='instruction-section'>


          <Instructions Weight={weight} Reds={RedPlates} Collars={Collars} BarWeight={BarWeight}></Instructions>
        </div>
      </section>

    </div>
  );
}

export default App;
