import React, { useContext } from "react";
import './SimonSaySeqTracker.css';
import { SSContext } from "../../../../SimonSaysPageContext";

export default function SimonSaySeqTracker() {
    const { sequenceAmount, playersAnswers } = useContext(SSContext);

    return (
        <div className="simonsayseqtracker">
            {Array.from({ length: sequenceAmount }, (_, index) => (
                <div 
                    key={index} 
                    className={index < playersAnswers.length ? 'big-square' : 'small-square'}
                >
                </div>
            ))}
        </div>
    );
}
