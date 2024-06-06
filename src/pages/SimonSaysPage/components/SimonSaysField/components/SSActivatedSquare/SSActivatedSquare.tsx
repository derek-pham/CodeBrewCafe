import React, { useEffect } from 'react';
import './SSActivatedSquare.css';
import { SSActivatedSquareProps } from './ssActivatedSquareTypes';

const SSActivatedSquare: React.FC<SSActivatedSquareProps> = ({ onAnimationEnd, squareNum }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationEnd();
        }, 1000); // The duration of the animation in milliseconds

        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className={`ssactivatedsquare ${squareNum}bordercol`}></div>
    );
};

export default SSActivatedSquare;
