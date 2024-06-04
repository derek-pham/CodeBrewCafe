import React, { createContext, useState } from 'react';

export const SSContext = createContext();

export function SimonSaysPageContextProvider({ children }) {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const [sequencePattern, setSequencePattern] = useState([])
    const [sequenceAmount, setSequenceAmount] = useState(9);
    const [playersAnswers, setPlayersAnswers] = useState([])
    const [activeSquare, setActiveSquare] = useState('');
    const [result, setResult] = useState("");
    const [reset, incrementReset] = useState(0)
    const [playerLives, setPlayerLives]= useState(3);
    const [disableUserControls, setDisableUserControls] = useState(false)
    const [renderMsg, setRenderMsg] = useState(false)
    const [alertTransform, setAlertTransform] = useState(false)

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
        setPlayerLives,
        disableUserControls,
        setDisableUserControls,
        renderMsg, 
        setRenderMsg,
        alertTransform,
        setAlertTransform,
    };

    return (
        <SSContext.Provider value={value}>
            {children}
        </SSContext.Provider>
    );
}
