import React, { useState, useContext } from 'react';
import './SimonSaysButton.css';
import simonSaysImage from './simonsays.png'
import { HomePageContext } from '../../../../HomePageContext';

function SimonSaysButton() {

    const { isSelected, setIsSelected, setDisplayTitle, setDisplayImage, setDescription, setPageLink } = useContext(HomePageContext)

    const description = 'Challenge your memory and reflexes with Simon Says! Follow the ever-growing sequences of colored lights and sounds—can you keep up and master the game?'

    const handleClick = () => {
        setIsSelected('simonSays');
        setDisplayTitle('SIMON SAYS')
        setDisplayImage(simonSaysImage)
        setDescription(description)
        setPageLink('/simonsays')
    };

    return (
        <button
            className={`simonSaysButton ${isSelected == 'simonSays' ? 'simonSaysButton-selected' : ''}`}
            onClick={handleClick}
        >
        </button>
    );
}

export default SimonSaysButton;
