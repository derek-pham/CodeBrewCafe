import { useContext, useEffect, useState } from "react";
import './SimonSaysPlaySeq.css'
import { SSContext } from "../../../../SimonSaysPageContext";
import { SimonSaysContextType } from "../../../../simonSaysPageContextTypes";

export default function SimonSaysPlaySeq() {
    const context = useContext<SimonSaysContextType | undefined>(SSContext);
    if (!context) {
        throw new Error("SomeComponent must be used within a SimonSaysPageContextProvider");
    }
    const { delay, sequencePattern, setActiveSquare, setDisableUserControls, playerWon } = context
    
    const [isDisabled, setIsDisabled] = useState(false)

    async function playSequence() {
        console.log(sequencePattern)
        setIsDisabled(true)
        setDisableUserControls(true)
        for (let i = 0; i < sequencePattern.length; i++) {
            let x = sequencePattern[i]
            setActiveSquare(`sq${x}`)
            console.log(x)
            await delay(1100);
        }
        setIsDisabled(false)
        setDisableUserControls(false)
    }
    
    useEffect(() => {
        if (playerWon) {
            setIsDisabled(true)
        }
    }, [playerWon]);

    return (
        <div className={`simonsaysplayseq ${isDisabled&& 'disabled'}`}>
            <button id="ssplaybutton" onClick={playSequence}>PLAY</button>
        </div>
    )
}