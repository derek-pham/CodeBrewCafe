import { useContext } from "react";
import './SimonSaySeqTracker.css';
import { SSContext } from "../../../../SimonSaysPageContext";
import { SimonSaysContextType } from "../../../../simonSaysPageContextTypes";

export default function SimonSaySeqTracker() {
    const context = useContext<SimonSaysContextType | undefined>(SSContext);
    if (!context) {
        throw new Error("Component must be used within a SimonSaysPageContextProvider");
    }
    const { sequenceAmount, playersAnswers } = context;

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
