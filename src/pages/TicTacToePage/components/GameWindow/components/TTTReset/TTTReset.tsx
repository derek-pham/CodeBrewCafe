import { useState, useContext } from 'react'
import './TTTReset.css'
import { TTTContext } from '../../../../TicTacToePageContext'
import resetImg from './reset.png'

export default function TTTReset() {
    const { prevPlayer, setPrevPlayer, setCurrentPlayer, setGameStatus, setGameWinner, setWinningCombo, setResetDivTrigger } = useContext(TTTContext)

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
        setWinningCombo(null)
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