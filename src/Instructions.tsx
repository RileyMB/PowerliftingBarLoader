import React, { useEffect, useState } from 'react';
import './App.css';
import './Bar.css'
import './Instructions.css'
import Collar from './Collar';
import Plate from './Plate';

function Instructions(props: { Weight: number, Reds: boolean, Collars: boolean, BarWeight: number }) {

    const [plateArray, setPlateArray] = useState<any>([])

    useEffect(() => {
        getPlateArray();
    }, [props])


    function getPlateArray() {
        //COLOUR, WEIGHT, SIZE (for rendering)
        let arr: any[] = [["Red", 25.0, 75], ["Blue", 20.0, 75], ["Yellow", 15.0, 65], ["Green", 10.0, 60], ["White", 5.0, 45], ["Black", 2.5, 45], ["Silver", 1.25, 40]];
        console.log("HERE", props.Reds)
        if (!props.Reds) { //Remove Red from array
            arr.shift();
        }

        setPlateArray(arr)
    }


    function calcBar() {

        var loadedplates = [];
        var bar = props.BarWeight;
        var collars = props.Collars ? 5 : 0;
        var subWeight = props.Weight;
        subWeight = subWeight - bar - collars; //straight away take the weight off of the bar and collars

        if (subWeight % 2.5 == 0) {
            var index = 0;
            while (subWeight > 0 && index <= plateArray.length) {
                if ((subWeight - (plateArray[index][1] * 2)) >= 0) { //If plate * 2 fits into subweight

                    subWeight = subWeight - (plateArray[index][1] * 2);
                    loadedplates.push(plateArray[index]);
                }
                else {
                    index++;
                }
            }
        }

        //setLoadedPlates(loadedplates)
        return(<>{renderIntructions(loadedplates)}</>)

    }

    function renderIntructions(loadedPlates: any[]) {

        let elements: JSX.Element[] = [];
        let instructions: { Color: string, Weight: number, Size: number, Qty: number }[] = [];

        //For each loaded plate
        loadedPlates.forEach((plate: any[]) => {
            let color = plate[0]
            let weight = plate[1]
            let size = plate[2]

            let found = false;
            //For each set of instructions
            if (instructions.length > 0) {
                instructions.forEach((instruction) => {
                    // if there already is no matching color 
                    if (!found) {
                        //check if the current instruction == the loaded plate color
                        if (instruction.Color === color) {
                            //Set found to true so nothing is added to instructions, rather increse the QTY
                            instruction.Qty++;
                            found = true;
                        }
                    }
                })
            }
            //If no match was found in the instructions add it to the instructions
            if (!found) {
                instructions.push({ Color: color, Weight: weight, Size: size, Qty: 1 })
            }
        });

        instructions.forEach((plate) => {
            elements.push(<div className='instruction' key={plate.Color}>
                <Plate Color={plate.Color} Size={plate.Size} HalfBar={false}></Plate>
                <a className='instruction-text'> {plate.Qty} x {plate.Weight}KG</a>
            </div>)
        })

        if(props.Collars){
            elements.push(<div className='instruction' key={"collar"} >
            <Collar side={0} Plates={[]} on={true} Instruction={true} HalfBar={false}></Collar>
            <a className='instruction-text'> {1} x COLLAR</a>
        </div>)

            elements.push(<a style={{fontSize:"X-large"}} key={"infoText"}>*COLLARS WEIGH 2.5KG EACH</a>)
        }

        return (elements)
    }

    return (<>{calcBar()}</>)
}

export default Instructions;

