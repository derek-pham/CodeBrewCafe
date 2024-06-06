import { useContext } from 'react'
import './TTTWinner.css'
import { TTTContext } from '../../../../TicTacToePageContext'
import { TicTacToeContextType } from '../../../../tttPageContextTypes';

export default function TTTWinner() {
    const context = useContext<TicTacToeContextType | undefined>(TTTContext);
    if (!context) {
        throw new Error("Component must be used within a TicTacToePageContextProvider");
    }

    const { gameWinner } = context;

    return (
        <div className="ttt-winner">
            {gameWinner ? <p>{gameWinner} WON!</p> : null}
        </div>
    );
}
