import './MainMenu.css';
import TicTacToeButton from './buttons/TicTacToeButton/TicTacToeButton';
import CalculatorButton from './buttons/CalculatorButton/CalculatorButton';
import SimonSaysButton from './buttons/SimonSaysButton/SimonSaysButton';

function MainMenu() {
  return (
    <div className="mainMenu">
      <TicTacToeButton />
      <CalculatorButton />
      <SimonSaysButton />
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