import React, { useContext, useState } from "react";
import './SimonSaysPlaySeq.css'
import { SSContext } from "../../../../SimonSaysPageContext";

export default function SimonSaysPlaySeq() {
    const { delay, sequencePattern, setActiveSquare } = useContext(SSContext)
    const [isDisabled, setIsDisabled] = useState(false)

    async function playSequence() {
        console.log(sequencePattern)
        setIsDisabled(true)
        for (let i = 0; i < sequencePattern.length; i++) {
            let x = sequencePattern[i]
            setActiveSquare(`sq${x}`)
            console.log(x)
            await delay(1100);
        }
        setIsDisabled(false)
    }

    return (
        <div className={`simonsaysplayseq ${isDisabled&& 'disabled'}`}>
            <button id="ssplaybutton" onClick={playSequence}>PLAY</button>
        </div>
    )
}