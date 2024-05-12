import { useContext } from 'react'
import './TTTWinner.css'
import { TTTContext } from '../../../../TicTacToePageContext'

export default function TTTWinner() {
    const { gameWinner } = useContext(TTTContext);

    return (
        <div className="ttt-winner">
            {gameWinner ? <p>{gameWinner} WON!</p> : null}
        </div>
    );
}
