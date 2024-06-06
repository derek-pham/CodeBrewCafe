// contextTypes.ts
export interface TicTacToeContextType {
    currentPlayer: string;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
    prevPlayer: string;
    setPrevPlayer: React.Dispatch<React.SetStateAction<string>>;
    setting: string;
    setSetting: React.Dispatch<React.SetStateAction<string>>;
    gameStatus: string[];
    setGameStatus: React.Dispatch<React.SetStateAction<string[]>>;
    gameWinner: string | null;
    setGameWinner: React.Dispatch<React.SetStateAction<string | null>>;
    winningCombo: number[];
    setWinningCombo: React.Dispatch<React.SetStateAction<number[]>>;
    resetDivTrigger: boolean;
    setResetDivTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}
