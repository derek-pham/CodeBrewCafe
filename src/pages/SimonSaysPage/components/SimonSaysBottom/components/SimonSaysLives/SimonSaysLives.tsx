import React, { useContext } from "react";
import './SimonSaysLives.css';
import { SSContext } from "../../../../SimonSaysPageContext";

export default function SimonSaysLives() {
    const { playerLives } = useContext(SSContext);

    return (
        <div className="simonsayslives">
            {Array.from({ length: playerLives }, (_, index) => (
                <span key={index}>❤️</span>
            ))}
        </div>
    );
}
