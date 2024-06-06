import { useContext } from "react";
import './SimonSaysLives.css';
import { SSContext } from "../../../../SimonSaysPageContext";
import { SimonSaysContextType } from "../../../../simonSaysPageContextTypes";

export default function SimonSaysLives() {
    const context = useContext<SimonSaysContextType | undefined>(SSContext);

    if (!context) {
        throw new Error("Component must be used within a SimonSaysPageContextProvider");
    }

    const { playerLives } = context;

    return (
        <div className="simonsayslives">
            {Array.from({ length: playerLives }, (_, index) => (
                <span key={index}>❤️</span>
            ))}
        </div>
    );
}
