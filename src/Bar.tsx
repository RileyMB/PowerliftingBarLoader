import React, { useState } from 'react';
import './App.css';
import './Bar.css'
import Collar from './Collar';
import Plate from './Plate';

function Bar(props: { Weight: number, Reds: boolean, Collars: boolean, BarWeight: number }) {
    var plateArray = getPlateArray();
    const [valid, setValid] = useState(true)

    function getPlateArray() {
        //COLOUR, WEIGHT, SIZE (for rendering)
        let arr: any[] = [["Red", 25.0, 75], ["Blue", 20.0, 75], ["Yellow", 15.0, 65], ["Green", 10.0, 60], ["White", 5.0, 45], ["Black", 2.5, 45], ["Silver", 1.25, 40]];

        if (!props.Reds) { //Remove Red from array
            arr.shift();
        }

        return arr;
    }



    function drawBar(loadedPlates: any[]) {

        let plates = [];
        for (let i = 0; i < loadedPlates.length; i++) {
            plates.push(<Plate Color={loadedPlates[i][0]} Size={loadedPlates[i][2]}></Plate>)
        }
        let rightPlates = [...plates]



        return (<div className='BarGraphicArea'>

            <Collar side={0} Plates={loadedPlates} on={props.Collars}></Collar>
            {plates.reverse()}
            <div className='Bar'></div>
            {rightPlates}
            <Collar side={1} Plates={loadedPlates} on={props.Collars}></Collar>
        </div>)
    }

    function calcBar() {

        var loadedPlates = [];
        var bar = props.BarWeight;
        var collars = props.Collars ? 5 : 0;
        var subWeight = props.Weight;
        subWeight = subWeight - bar - collars; //straight away take the weight off of the bar and collars

        if(subWeight % 2.5 == 0){
            var index = 0;
            while (subWeight > 0 && index <= plateArray.length) {
                if ((subWeight - (plateArray[index][1] * 2)) >= 0) { //If plate * 2 fits into subweight
    
                    subWeight = subWeight - (plateArray[index][1] * 2);
                    loadedPlates.push(plateArray[index]);
                }
                else {
                    index++;
                }
            }
        }
        
        return (<div className={subWeight < 0 ? 'invalid' : 'valid'}>
            {/* {(props.Collars ? "COLLAR " : "") + loadedPlates.reverse() + " BAR " + loadedPlates.reverse() + (props.Collars ? " COLLAR" : "")} */}
            {drawBar(loadedPlates)}
        </div>)
    }

    return (<>  {calcBar()} </>);
}

export default Bar;

