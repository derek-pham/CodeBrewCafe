import React, { useEffect } from "react";
import './SSActivatedSquare.css';

export default function SSActivatedSquare({ onAnimationEnd , squareNum }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationEnd();
        }, 1000); // The duration of the animation in milliseconds

        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className={`ssactivatedsquare ${squareNum}bordercol`}></div>
    );
}
