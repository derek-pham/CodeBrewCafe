// src/pages/TicTacToePage/components/GameWindow/components/TTTDiv/TTTDiv.tsx
import React, { useState, useContext, useEffect } from 'react';
import './TTTDiv.css';
import { TTTContext } from '../../../../TicTacToePageContext';
import markO from './letter-o.png';
import markX from './letter-x.png';
import { TicTacToeContextType } from '../../../../tttPageContextTypes';
import { TTTDivProps } from './tttDivTypes';

const TTTDiv: React.FC<TTTDivProps> = ({ position }) => {
    const context = useContext<TicTacToeContextType | undefined>(TTTContext);

    if (!context) {
        throw new Error("Component must be used within a TicTacToePageContextProvider");
    }

    const { currentPlayer, setCurrentPlayer, gameStatus, setGameStatus, resetDivTrigger, gameWinner, winningCombo } = context;

    const [mark, setMark] = useState('');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setMark('');
    }, [resetDivTrigger]);

    useEffect(() => {
        setIsActive(winningCombo.includes(position));
    }, [winningCombo]);

    const updateBoard = (position: number, char: string) => {
        if (gameStatus[position] === '-') { // Ensure the cell is empty before updating
            const newBoard = [...gameStatus]; // Make a copy of the current board
            newBoard[position] = char; // Set the character at the specified index
            setGameStatus(newBoard); // Update the state with the new board
        }
    };

    const addMarker = () => {
        if (gameWinner) {
            return null;
        }
        if (currentPlayer === 'Player-X' && mark === '') {
            setMark(markX);
            updateBoard(position, 'x');
            setCurrentPlayer('Player-O');
        } else if (currentPlayer === 'Player-O' && mark === '') {
            setMark(markO);
            updateBoard(position, 'o');
            setCurrentPlayer('Player-X');
        }
    };

    return (
        <div className={`ttt-div ${isActive ? 'ttt-div-active' : ''}`} onClick={addMarker}>
            <img src={mark} alt="" />
        </div>
    );
};

export default TTTDiv;
