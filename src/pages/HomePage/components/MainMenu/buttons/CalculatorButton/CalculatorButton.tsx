import React, { useState, useContext } from 'react';
import './CalculatorButton.css';
import calcImg from './calculator.png'
import { HomePageContext } from '../../../../HomePageContext';


function CalculatorButton() {

  const {isSelected, setIsSelected, setDisplayTitle, setDisplayImage} = useContext(HomePageContext)

  const handleClick = () => {
    setIsSelected('calc');
    setDisplayTitle('CALCULATOR')
    setDisplayImage(calcImg)
  };

  return (
    <button
      className={`calcButton ${isSelected == 'calc' ? 'tttButton-selected' : ''}`}
      onClick={handleClick}
    >
    </button>
  );
}

export default CalculatorButton;