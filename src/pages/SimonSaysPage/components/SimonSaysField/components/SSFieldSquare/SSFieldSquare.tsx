import React, { useEffect, useState } from "react";
import './SSFieldSquare.css';
import SSActivatedSquare from "../SSActivatedSquare/SSActivatedSquare";

export default function SSFieldSquare({ squareNum, isActivated, setActiveSquare }) {
    const [showActivatedSquare, setShowActivatedSquare] = useState(isActivated);

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

    return (
        <div className={`ssfieldsquare ${isActivated ? 'active' : ''} ${squareNum}`}>
            {showActivatedSquare && <SSActivatedSquare onAnimationEnd={handleAnimationEnd} squareNum={squareNum}/>}
        </div>
    );
}
