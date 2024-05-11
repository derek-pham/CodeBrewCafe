import React, { useState, useContext } from 'react';
import './CalculatorButton.css';
import calcImg from './calculator.png'
import { HomePageContext } from '../../../../HomePageContext';


function CalculatorButton() {

  const { isSelected, setIsSelected, setDisplayTitle, setDisplayImage, setDescription } = useContext(HomePageContext)

  const description = 'With a minimalist interface, this app provides essential functions like addition, subtraction, multiplication, and division.'

  const handleClick = () => {
    setIsSelected('calc');
    setDisplayTitle('CALCULATOR')
    setDisplayImage(calcImg)
    setDescription(description)
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