import React, { useContext, useEffect, useState } from "react";
import './SimonSaysField.css';
import SSFieldSquare from "./components/SSFieldSquare/SSFieldSquare";
import { SSContext } from "../../SimonSaysPageContext";

export default function SimonSaysField() {
    const { sequenceAmount, setSequenceAmount, sequencePattern, setSequencePattern, activeSquare, setActiveSquare, result,  playersAnswers, setPlayersAnswers, setAlertTransform } = useContext(SSContext);
    const [currentGameStage, setCurrentGameStage] = useState(1);
    const [sequenceNotInitiated, setSequenceNotInitiated] = useState(true);
    const [transformTrigger, setTransformTrigger] = useState(false);
    let upperLimit = (currentGameStage + 1) ** 2;

    function addToSequencePattern(shouldReset: string) {
        let newPattern;
        if (shouldReset === 'reset') {
            newPattern = [];
            while (newPattern.length < 2) {
                let x = Math.floor((Math.random() * upperLimit) + 1);
                newPattern.push(x);
            }
        } else {
            newPattern = [...sequencePattern];
            while (newPattern.length < sequenceAmount) {
                let x = Math.floor((Math.random() * upperLimit) + 1);
                newPattern.push(x);
            }
        }
        setSequencePattern(newPattern);
    }

    useEffect(()=> {
        if (currentGameStage>3) {
            setCurrentGameStage(3)
        }
    },[currentGameStage])

    useEffect(() => {
        if (sequenceNotInitiated) {
            addToSequencePattern('');
            setSequenceNotInitiated(false);
        }

        if (result === "WIN" && sequenceAmount > 9) {
            setAlertTransform(true)
        }

        if (result === "WIN" && sequenceAmount > 10) {
            setCurrentGameStage((prev) => prev + 1);
            setSequencePattern([]);
            setTransformTrigger(true);
            addToSequencePattern('reset');
        } else if (result === "WIN") {
            addToSequencePattern('');
            setPlayersAnswers([]);
        } else if (result === "LOSE") {
            setPlayersAnswers([]);
        }

    }, [result]);

    useEffect(() => {
        if (transformTrigger) {
            setSequenceAmount(2);
            setPlayersAnswers([]); // Clear playersAnswers first
            addToSequencePattern('reset');
            console.log('Effect ran due to dependency change');
            setTransformTrigger(false);
        } else {
          // Your effect logic here, which will only run on subsequent dependency changes
          setTransformTrigger(false);
        }
      }, [transformTrigger]);

    useEffect(() => {
        console.log('sequencePattern:', sequencePattern);
        console.log('playersAnswers:', playersAnswers);
        console.log('currentGameStage:', currentGameStage);
        console.log('sequenceAmount:', currentGameStage);
    }, [sequencePattern]);

    return (
        <div className={`simonsaysfield level${currentGameStage}`}>
            <SSFieldSquare squareNum={`square1`} isActivated={activeSquare === 'sq1'} setActiveSquare={setActiveSquare} />
            <SSFieldSquare squareNum={`square2`} isActivated={activeSquare === 'sq2'} setActiveSquare={setActiveSquare} />
            <SSFieldSquare squareNum={`square3`} isActivated={activeSquare === 'sq3'} setActiveSquare={setActiveSquare} />
            <SSFieldSquare squareNum={`square4`} isActivated={activeSquare === 'sq4'} setActiveSquare={setActiveSquare} />
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
    );
}
