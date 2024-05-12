import { useState, useContext, useEffect } from 'react'
import './TTTPlayerScore.css'
import { TTTContext } from '../../../../TicTacToePageContext'


export default function TTTPlayerScore({ playername }) {
    const { gameWinner } = useContext(TTTContext)
    const [playerScore, setPlayerScore] = useState(0)

    const addScore = () => {
        setPlayerScore(prevCount => prevCount + 1);
      };

    useEffect(() => {
        if (playername === `Player-${gameWinner}`) {
            addScore()
        }
    },[gameWinner])

    return (
        <>
            <div className="ttt-player-score" >
                <p>Score: {playerScore}</p>
            </div>
        </>
    )
}