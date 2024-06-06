import { useState, useContext } from 'react'
import './TTTReset.css'
import { TTTContext } from '../../../../TicTacToePageContext'
import resetImg from './reset.png'
import { TicTacToeContextType } from '../../../../tttPageContextTypes'

export default function TTTReset() {
    const context = useContext<TicTacToeContextType | undefined>(TTTContext);
    if (!context) {
        throw new Error("Component must be used within a TicTacToePageContextProvider");
    }

    const { prevPlayer, setPrevPlayer, setCurrentPlayer, setGameStatus, setGameWinner, setWinningCombo, setResetDivTrigger } = context

    const [isActive, setIsActive] = useState(false);

    const handleAnimationEnd = () => {
        setIsActive(false);
    };

    const handleMouseDown = () => {
        setIsActive(true); // Start animation
    };

    function resetGame() {
        if (prevPlayer == 'Player-X') {
            setCurrentPlayer('Player-O')
            setPrevPlayer('Player-O')
        } else if (prevPlayer == 'Player-O') {
            setCurrentPlayer('Player-X')
            setPrevPlayer('Player-X')
        }
        setGameStatus(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
        setGameWinner(null)
        setWinningCombo([])
        setResetDivTrigger(prev => !prev);
    }

    return (
        <>
            <div id='resetbutton' onMouseDown={handleMouseDown}
                onAnimationEnd={handleAnimationEnd} className={`ttt-reset ${isActive ? 'active' : ''}`} onClick={resetGame}>
                <img src={resetImg} alt="Reset" />
            </div>
        </>
    )
}