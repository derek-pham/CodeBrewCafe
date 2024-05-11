import React, { useState, useContext } from 'react';
import './TicTacToeButton.css';
import tttImage from './tic-tac-toe.png'
import { HomePageContext } from '../../../../HomePageContext';

function TicTacToeButton() {

    const { isSelected, setIsSelected, setDisplayTitle, setDisplayImage, setDescription, setPageLink } = useContext(HomePageContext)

    const description = 'Experience the classic game of tic-tac-toe! Perfect for quick breaks or passing time.'

    const handleClick = () => {
        setIsSelected('ttt');
        setDisplayTitle('TIC-TAC-TOE')
        setDisplayImage(tttImage)
        setDescription(description)
        setPageLink('/tictactoe')
    };

    return (
        <button
            className={`TicTacToeButton ${isSelected == 'ttt' ? 'tttButton-selected' : ''}`}
            onClick={handleClick}
        >
        </button>
    );
}

export default TicTacToeButton;
