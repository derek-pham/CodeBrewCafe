import React, { useContext, useEffect, useState } from "react";
import './SSFieldSquare.css';
import SSActivatedSquare from "../SSActivatedSquare/SSActivatedSquare";
import { SSContext } from "../../../../SimonSaysPageContext";

export default function SSFieldSquare({ squareNum, isActivated, setActiveSquare }) {
    const {playersAnswers, setPlayersAnswers} = useContext(SSContext)
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

    function handleClick() {
        setIsChosen(true);
        setPlayersAnswers((prevItems) => [
            ...prevItems, 
            parseInt(squareNum.replace('square', ''), 10)
        ]);
    }

    return (
        <div className={`ssfieldsquare ${isActivated ? 'active' : ''} ${squareNum} ${isChosen ? 'chosen' : ''}`} onClick={handleClick} onAnimationEnd={()=>setIsChosen(false)}>
            {showActivatedSquare && <SSActivatedSquare onAnimationEnd={handleAnimationEnd} squareNum={squareNum}/>}
        </div>
    );
}
