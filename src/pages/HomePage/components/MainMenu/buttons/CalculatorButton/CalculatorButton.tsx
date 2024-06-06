import { useContext } from 'react';
import './CalculatorButton.css';
import calcImg from './calculator.png'
import { HomePageContext } from '../../../../HomePageContext';
import { HomePageContextType } from '../../../../homePageContextTypes';


function CalculatorButton() {
  const context = useContext<HomePageContextType | undefined>(HomePageContext);

  if (!context) {
    throw new Error("CalculatorButton must be used within a HomePageContextProvider");
}

  const { isSelected, setIsSelected, setDisplayTitle, setDisplayImage, setDescription, setPageLink } = context

  const description = 'With a minimalist interface, this app provides essential functions like addition, subtraction, multiplication, and division.'

  const handleClick = () => {
    setIsSelected('calc');
    setDisplayTitle('CALCULATOR')
    setDisplayImage(calcImg)
    setDescription(description)
    setPageLink('/calculator')
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