import { createContext, useState, ReactNode } from 'react';
import { SimonSaysContextType } from './simonSaysPageContextTypes';

export const SSContext = createContext<SimonSaysContextType | undefined>(undefined);

export function SimonSaysPageContextProvider({ children }: { children: ReactNode }) {
    const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));
    const [sequencePattern, setSequencePattern] = useState<number[]>([]);
    const [sequenceAmount, setSequenceAmount] = useState<number>(2);
    const [playersAnswers, setPlayersAnswers] = useState<number[]>([]);
    const [activeSquare, setActiveSquare] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [reset, incrementReset] = useState<number>(0);
    const [playerLives, setPlayerLives] = useState<number>(3);
    const [disableUserControls, setDisableUserControls] = useState<boolean>(false);
    const [renderMsg, setRenderMsg] = useState<boolean>(false);
    const [alertTransform, setAlertTransform] = useState<boolean>(false);
    const [currentGameStage, setCurrentGameStage] = useState<number>(1);
    const [playerWon, setPlayerWon] = useState<boolean>(false);

    const value: SimonSaysContextType = {
        delay,
        sequencePattern,
        setSequencePattern,
        sequenceAmount,
        setSequenceAmount,
        playersAnswers,
        setPlayersAnswers,
        activeSquare,
        setActiveSquare,
        result,
        setResult,
        reset,
        incrementReset,
        playerLives,
        setPlayerLives,
        disableUserControls,
        setDisableUserControls,
        renderMsg,
        setRenderMsg,
        alertTransform,
        setAlertTransform,
        currentGameStage,
        setCurrentGameStage,
        playerWon,
        setPlayerWon,
    };

    return (
        <SSContext.Provider value={value}>
            {children}
        </SSContext.Provider>
    );
}
