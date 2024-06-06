// AppContext.tsx
import { createContext, useState, ReactNode } from 'react';
import { TicTacToeContextType } from './tttPageContextTypes';

export const TTTContext = createContext<TicTacToeContextType | undefined>(undefined);

export function TicTacToePageContextProvider({ children }: { children: ReactNode }) {
    const [currentPlayer, setCurrentPlayer] = useState<string>('Player-X');
    const [prevPlayer, setPrevPlayer] = useState<string>('Player-X');
    const [setting, setSetting] = useState<string>('alternate-default');
    const [gameStatus, setGameStatus] = useState<string[]>(['-', '-', '-', '-', '-', '-', '-', '-', '-']);
    const [gameWinner, setGameWinner] = useState<string | null>(null);
    const [winningCombo, setWinningCombo] = useState<number[]>([]);
    const [resetDivTrigger, setResetDivTrigger] = useState<boolean>(false);

    const value: TicTacToeContextType = {
        currentPlayer,
        setCurrentPlayer,
        prevPlayer,
        setPrevPlayer,
        setting,
        setSetting,
        gameStatus,
        setGameStatus,
        gameWinner,
        setGameWinner,
        winningCombo,
        setWinningCombo,
        resetDivTrigger,
        setResetDivTrigger
    };

    return (
        <TTTContext.Provider value={value}>
            {children}
        </TTTContext.Provider>
    );
}
