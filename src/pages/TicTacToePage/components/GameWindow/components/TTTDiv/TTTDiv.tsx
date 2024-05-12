import { useState, useContext, useEffect } from 'react'
import './TTTDiv.css'
import { TTTContext } from '../../../../TicTacToePageContext'
import markO from './letter-o.png'
import markX from './letter-x.png'

export default function TTTDiv({ position }) {
    const { currentPlayer, setCurrentPlayer, gameStatus, setGameStatus, resetDivTrigger, gameWinner, winningCombo } = useContext(TTTContext)
    const [mark, setMark] = useState('')
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        console.log(resetDivTrigger)
        setMark('')
    }, [resetDivTrigger])

    useEffect(() => {
        setIsActive(winningCombo.includes(position))
    }, [winningCombo])

    const updateBoard = (position, char) => {
        if (gameStatus[position] === '-') { // Ensure the cell is empty before updating
            const newBoard = [...gameStatus]; // Make a copy of the current board
            newBoard[position] = char; // Set the character at the specified index
            setGameStatus(newBoard); // Update the state with the new board
        }
    };

    function addMarker() {
        if (gameWinner) {
            return null
        }
        if (currentPlayer == 'Player-X' && (mark == '')) {
            setMark(markX)
            updateBoard(position, 'x')
            setCurrentPlayer('Player-O')
        }
        else if (currentPlayer == 'Player-O' && (mark == '')) {
            setMark(markO)
            updateBoard(position, 'o')
            setCurrentPlayer('Player-X')
        }
    }

    return (
        <>
            <div className={`ttt-div ${isActive?'ttt-div-active':''}`} onClick={addMarker}>
                <img src={mark} alt="" />
            </div>
        </>
    )
}