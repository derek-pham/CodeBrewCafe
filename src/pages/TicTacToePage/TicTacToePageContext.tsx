// AppContext.js
import React, { createContext, useState } from 'react';

export const TTTContext = createContext();

export function TicTacToePageContextProvider({ children }) {
    const [currentPlayer, setCurrentPlayer] = useState('Player-X')
    const [prevPlayer, setPrevPlayer] = useState('Player-X')
    const [setting, setSetting] = useState('alternate-default')
    const [gameStatus, setGameStatus] = useState(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
    const [gameWinner, setGameWinner] = useState(null)
    const [winningCombo, setWinningCombo] = useState(null)
    const [resetDivTrigger, setResetDivTrigger] = useState(false)

    const value = {
        currentPlayer,
        setCurrentPlayer,
        prevPlayer,
        setPrevPlayer,
        setting,
        setSetting,
        gameStatus,
        setGameStatus,
        gameWinner,
        setGameWinner,
        winningCombo,
        setWinningCombo,
        resetDivTrigger,
        setResetDivTrigger
    };

    return (
        <TTTContext.Provider value={value}>
            {children}
        </TTTContext.Provider>
    );
}
