import React from 'react';
import './MainMenu.css';
import TicTacToeButton from './buttons/TicTacToeButton/TicTacToeButton';
import CalculatorButton from './buttons/CalculatorButton/CalculatorButton';

function MainMenu() {
  return (
    <div className="mainMenu">
      <TicTacToeButton/>
      <CalculatorButton/>
      <button id='testbutton'></button>
      <button id='testbutton'></button>
      <button id='testbutton'></button>
      <button id='testbutton'></button>
      <button id='testbutton'></button>
      <button id='testbutton'></button>
      <button id='testbutton'></button>
      <button id='testbutton'></button>
      <button id='testbutton'></button>
    </div>
  );
}

export default MainMenu;