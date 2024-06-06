// contextTypes.ts
export interface SimonSaysContextType {
    delay: (ms: number) => Promise<void>;
    sequencePattern: number[];
    setSequencePattern: React.Dispatch<React.SetStateAction<number[]>>;
    sequenceAmount: number;
    setSequenceAmount: React.Dispatch<React.SetStateAction<number>>;
    playersAnswers: number[];
    setPlayersAnswers: React.Dispatch<React.SetStateAction<number[]>>;
    activeSquare: string;
    setActiveSquare: React.Dispatch<React.SetStateAction<string>>;
    result: string;
    setResult: React.Dispatch<React.SetStateAction<string>>;
    reset: number;
    incrementReset: React.Dispatch<React.SetStateAction<number>>;
    playerLives: number;
    setPlayerLives: React.Dispatch<React.SetStateAction<number>>;
    disableUserControls: boolean;
    setDisableUserControls: React.Dispatch<React.SetStateAction<boolean>>;
    renderMsg: boolean;
    setRenderMsg: React.Dispatch<React.SetStateAction<boolean>>;
    alertTransform: boolean;
    setAlertTransform: React.Dispatch<React.SetStateAction<boolean>>;
    currentGameStage: number;
    setCurrentGameStage: React.Dispatch<React.SetStateAction<number>>;
    playerWon: boolean;
    setPlayerWon: React.Dispatch<React.SetStateAction<boolean>>;
}
