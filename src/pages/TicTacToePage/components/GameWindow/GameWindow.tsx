import { useContext, useEffect, useState } from 'react'
import { TTTContext } from '../../TicTacToePageContext'
import './GameWindow.css'
import TTTField from './components/TTTField/TTTField'
import TTTPlayer from './components/TTTPlayer/TTTPlayer'
import TTTReset from './components/TTTReset/TTTReset'
import TTTWinner from './components/TTTWinner/TTTWinner'

export default function GameWindow() {
    const [highlightX, setHighlightX] = useState(true)
    const [highlightO, setHighlightO] = useState(false)
    const { currentPlayer, setCurrentPlayer, gameStatus, setGameWinner, setWinningCombo } = useContext(TTTContext)

    function checkWinner(gameStatus) {
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
                <div></div>
                <TTTWinner/>
                <div></div>
                <TTTPlayer playername='Player-X' highlightSetting={highlightX} />
                <TTTField />
                <TTTPlayer playername='Player-O' highlightSetting={highlightO} />
                <div></div>
                <TTTReset />
            </div>
        </>
    )
}