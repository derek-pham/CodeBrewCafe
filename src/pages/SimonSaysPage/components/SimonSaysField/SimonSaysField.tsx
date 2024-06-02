import React, { useEffect, useState } from "react";
import { useTimeout } from "react-use";
import './SimonSaysField.css'
import SSFieldSquare from "./components/SSFieldSquare/SSFieldSquare";

export default function SimonSaysField() {
    const [currentGameStage, setCurrentGameStage] = useState(1);
    const [activeSquare, setActiveSquare] = useState('');
    const [sequenceAmount, setSequenceAmount] = useState(2);
    const [sequencePattern, setSequencePattern]= useState([])
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    let upperLimit = (currentGameStage + 1) ** 2

    async function playRandomSequence() {
        for (let i = 1; i <= sequenceAmount; i++) {
            let x = Math.floor((Math.random() * upperLimit) + 1); // 1 ~ upperLimit
            setActiveSquare(`sq${x}`)
            console.log(x)
            await delay(1100);
        }
    }

    function addToSequencePattern() { 
        let x = Math.floor((Math.random() * upperLimit) + 1);
        setSequencePattern((prevItems) => [...prevItems, x])
    }

    async function playSequence() {
        console.log(sequencePattern)
        for (let i = 0; i < sequencePattern.length; i++) {
            let x = sequencePattern[i]
            setActiveSquare(`sq${x}`)
            console.log(x)
            await delay(1100);
        }
    }

    // Mounted twice during development
    useEffect(() => {
        addToSequencePattern()
    }, [])

    return (
        <div className={`simonsaysfield level${currentGameStage}`}>
            <SSFieldSquare squareNum={`square1`} isActivated={activeSquare === 'sq1'} setActiveSquare={setActiveSquare} />
            <SSFieldSquare squareNum={`square2`} isActivated={activeSquare === 'sq2'} setActiveSquare={setActiveSquare} />
            <SSFieldSquare squareNum={`square3`} isActivated={activeSquare === 'sq3'} setActiveSquare={setActiveSquare} />
            <SSFieldSquare squareNum={`square4`} isActivated={activeSquare === 'sq4'} setActiveSquare={setActiveSquare} />
            <button onClick={playSequence} style={{ position: 'absolute', zIndex: '2', userSelect: 'none' }}></button>
            {currentGameStage >= 2 && (
                <>
                    <SSFieldSquare squareNum={`square5`} isActivated={activeSquare === 'sq5'} setActiveSquare={setActiveSquare} />
                    <SSFieldSquare squareNum={`square6`} isActivated={activeSquare === 'sq6'} setActiveSquare={setActiveSquare} />
                    <SSFieldSquare squareNum={`square7`} isActivated={activeSquare === 'sq7'} setActiveSquare={setActiveSquare} />
                    <SSFieldSquare squareNum={`square8`} isActivated={activeSquare === 'sq8'} setActiveSquare={setActiveSquare} />
                    <SSFieldSquare squareNum={`square9`} isActivated={activeSquare === 'sq9'} setActiveSquare={setActiveSquare} />
                </>
            )}
            {currentGameStage >= 3 && (
                <>
                    <SSFieldSquare squareNum={`square10`} isActivated={activeSquare === 'sq10'} setActiveSquare={setActiveSquare} />
                    <SSFieldSquare squareNum={`square11`} isActivated={activeSquare === 'sq11'} setActiveSquare={setActiveSquare} />
                    <SSFieldSquare squareNum={`square12`} isActivated={activeSquare === 'sq12'} setActiveSquare={setActiveSquare} />
                    <SSFieldSquare squareNum={`square13`} isActivated={activeSquare === 'sq13'} setActiveSquare={setActiveSquare} />
                    <SSFieldSquare squareNum={`square14`} isActivated={activeSquare === 'sq14'} setActiveSquare={setActiveSquare} />
                    <SSFieldSquare squareNum={`square15`} isActivated={activeSquare === 'sq15'} setActiveSquare={setActiveSquare} />
                    <SSFieldSquare squareNum={`square16`} isActivated={activeSquare === 'sq16'} setActiveSquare={setActiveSquare} />
                </>
            )}
        </div>
    )
}