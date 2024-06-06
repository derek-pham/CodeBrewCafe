import { useContext, useEffect, useState } from 'react'
import { TTTContext } from '../../TicTacToePageContext'
import './GameWindow.css'
import TTTField from './components/TTTField/TTTField'
import TTTPlayer from './components/TTTPlayer/TTTPlayer'
import TTTReset from './components/TTTReset/TTTReset'
import TTTWinner from './components/TTTWinner/TTTWinner'
import { TicTacToeContextType } from '../../tttPageContextTypes'

export default function GameWindow() {
    const context = useContext<TicTacToeContextType | undefined>(TTTContext);
    if (!context) {
        throw new Error("Component must be used within a TicTacToePageContextProvider");
    }

    const [highlightX, setHighlightX] = useState(true)
    const [highlightO, setHighlightO] = useState(false)
    const { currentPlayer, gameStatus, setGameWinner, setWinningCombo } = context

    const checkWinner = (gameStatus: string[]): string | null => {
        // Define all possible winning combinations
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        // Check each winning combination
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameStatus[a] !== '-' && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
                setWinningCombo(combo)
                return gameStatus[a];  // Return 'X' or 'O' as the winner
            }
        }

        return null;  // No winner found
    }


    useEffect(() => {
        if (currentPlayer == 'Player-X') {
            setHighlightX(true)
            setHighlightO(false)
        } else if (currentPlayer == 'Player-O') {
            setHighlightX(false)
            setHighlightO(true)
        }
    }, [currentPlayer])

    useEffect(() => {
        const currentWinner = checkWinner(gameStatus);
        if (currentWinner) {     
            setGameWinner(currentWinner.toUpperCase())
            // You might want to reset the board or disable further moves here.
        }
    }, [gameStatus])

    return (
        <>
            <div className="game-window">
                <div id='filldiv1'></div>
                <TTTWinner/>
                <div id='filldiv2'></div>
                <TTTPlayer playername='Player-X' highlightSetting={highlightX} />
                <TTTField/>
                <TTTPlayer playername='Player-O' highlightSetting={highlightO} />
                <div id='filldiv3'></div>
                <TTTReset />
            </div>
        </>
    )
}