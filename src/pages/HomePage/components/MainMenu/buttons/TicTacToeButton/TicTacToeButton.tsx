import React, { useState, useContext } from 'react';
import './TicTacToeButton.css';
import tttImage from './tic-tac-toe.png'
import { HomePageContext } from '../../../../HomePageContext';

function TicTacToeButton() {

    const {isSelected, setIsSelected, setDisplayTitle, setDisplayImage} = useContext(HomePageContext)

    const handleClick = () => {
        setIsSelected('ttt');
        setDisplayTitle('TIC-TAC-TOE')
        setDisplayImage(tttImage)
    };

    return (
        <button
            className={`TicTacToeButton ${isSelected == 'ttt'? 'tttButton-selected' : ''}`}
            onClick={handleClick}
        >
        </button>
    );
}

export default TicTacToeButton;
