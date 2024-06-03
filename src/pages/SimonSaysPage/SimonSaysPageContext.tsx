import React, { createContext, useState } from 'react';

export const SSContext = createContext();

export function SimonSaysPageContextProvider({ children }) {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const [sequencePattern, setSequencePattern] = useState([])
    const [sequenceAmount, setSequenceAmount] = useState(2);
    const [playersAnswers, setPlayersAnswers] = useState([])
    const [activeSquare, setActiveSquare] = useState('');
    const [result, setResult] = useState("");
    const [reset, incrementReset] = useState(0)
    const [playerLives, setPlayerLives]= useState(3);

    const value = {
        delay,
        sequencePattern,
        setSequencePattern,
        sequenceAmount,
        setSequenceAmount,
        playersAnswers,
        setPlayersAnswers,
        activeSquare,
        setActiveSquare,
        result,
        setResult,
        reset,
        incrementReset,
        playerLives,
        setPlayerLives
    };

    return (
        <SSContext.Provider value={value}>
            {children}
        </SSContext.Provider>
    );
}
