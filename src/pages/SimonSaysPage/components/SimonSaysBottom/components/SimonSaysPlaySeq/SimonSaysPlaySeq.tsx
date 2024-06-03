import React, { useContext } from "react";
import './SimonSaysPlaySeq.css'
import { SSContext } from "../../../../SimonSaysPageContext";

export default function SimonSaysPlaySeq() {
    const { delay, sequencePattern, setActiveSquare } = useContext(SSContext)

    async function playSequence() {
        console.log(sequencePattern)
        for (let i = 0; i < sequencePattern.length; i++) {
            let x = sequencePattern[i]
            setActiveSquare(`sq${x}`)
            console.log(x)
            await delay(1100);
        }
    }

    return (
        <div className="simonsaysplayseq">
            <button onClick={playSequence}>▶️</button>
        </div>
    )
}