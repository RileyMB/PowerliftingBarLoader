import React, { useEffect, useState } from 'react';
import './App.css';
import './Bar.css'
import Collar from './Collar';
import Plate from './Plate';

function Instructions(props: { Weight: number, Reds: boolean, Collars: boolean, BarWeight: number }) {

    const [plateArray, setPlateArray] = useState<any>([])
    const [loadedPlates, setLoadedPlates] = useState<any>([])

    useEffect(() => {
        getPlateArray();
        calcBar();
    }, [props.Weight])


    function getPlateArray() {
        //COLOUR, WEIGHT, SIZE (for rendering)
        let arr: any[] = [["Red", 25.0, 75], ["Blue", 20.0, 75], ["Yellow", 15.0, 65], ["Green", 10.0, 60], ["White", 5.0, 45], ["Black", 2.5, 45], ["Silver", 1.25, 40]];

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

        setLoadedPlates(loadedplates)


    }

    function renderIntructions() {

        let elements: JSX.Element[] = [];
        let instructions: any[] = [{Color: String, Size: Number,Qty: Number}];

        loadedPlates.forEach((plate: any[], index: number) => {
            let color = plate[0]
            let size = plate[2]
            //If first plate of said color
            instructions.map((instruction: any, index) => {
                if (instruction.color === color) {
                    instruction.qty ++
                }
                
            })
        })


        loadedPlates.forEach((plate: any[]) => {
            elements.push(<div>
                <Plate Color={plate[0]} Size={plate[2]}></Plate>
                <a>x 1</a>
            </div>)
        })

        return (elements)



    }

    return (<>{renderIntructions()}</>)
}

export default Instructions;

