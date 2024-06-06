import { useState, useContext, useEffect } from 'react'
import './TTTPlayerScore.css'
import { TTTContext } from '../../../../TicTacToePageContext'
import { TicTacToeContextType } from '../../../../tttPageContextTypes';
import { TTTPlayerProps } from '../TTTPlayer/tttPlayerTypes';


const TTTPlayerScore: React.FC<TTTPlayerProps> = ({ playername }) => {
    const context = useContext<TicTacToeContextType | undefined>(TTTContext);
    if (!context) {
        throw new Error("Component must be used within a TicTacToePageContextProvider");
    }
    const { gameWinner } = context
    
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

export default TTTPlayerScore;