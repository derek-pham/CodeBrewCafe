import React, { useContext, useEffect, useState } from 'react';
import './SSFieldSquare.css';
import SSActivatedSquare from '../SSActivatedSquare/SSActivatedSquare';
import { SSContext } from '../../../../SimonSaysPageContext';
import { SimonSaysContextType } from '../../../../simonSaysPageContextTypes';
import { SSFieldSquareProps } from './ssFieldSquareTypes.ts';

const SSFieldSquare: React.FC<SSFieldSquareProps> = ({ squareNum, isActivated, setActiveSquare }) => {
    const context = useContext<SimonSaysContextType | undefined>(SSContext);

    if (!context) {
        throw new Error("Component must be used within a SimonSaysPageContextProvider");
    }

    const { setPlayersAnswers, disableUserControls } = context;

    const [showActivatedSquare, setShowActivatedSquare] = useState(isActivated);
    const [isChosen, setIsChosen] = useState(false);

    useEffect(() => {
        if (isActivated) {
            setShowActivatedSquare(true);
        } else {
            setShowActivatedSquare(false);
        }
    }, [isActivated]);

    const handleAnimationEnd = () => {
        setShowActivatedSquare(false);
        setActiveSquare('');
    };

    const handleClick = () => {
        if (disableUserControls) {
            return;
        }

        // Using requestAnimationFrame to prevent react batching
        setIsChosen(false);
        requestAnimationFrame(() => {
            setIsChosen(true);
        });

        setPlayersAnswers((prevItems) => [
            ...prevItems, 
            parseInt(squareNum.replace('square', ''), 10)
        ]);
    };

    return (
        <div 
            className={`ssfieldsquare ${isActivated ? 'active' : ''} ${squareNum} ${isChosen ? 'chosen' : ''}`} 
            onClick={handleClick} 
            onAnimationEnd={() => setIsChosen(false)}
        >
            {showActivatedSquare && <SSActivatedSquare onAnimationEnd={handleAnimationEnd} squareNum={squareNum} />}
        </div>
    );
};

export default SSFieldSquare;