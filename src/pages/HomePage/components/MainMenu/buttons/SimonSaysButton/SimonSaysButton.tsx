import { useContext } from 'react';
import './SimonSaysButton.css';
import simonSaysImage from './simonsays.png';
import { HomePageContext } from '../../../../HomePageContext';
import { HomePageContextType } from '../../../../homePageContextTypes';


function SimonSaysButton() {
    const context = useContext<HomePageContextType | undefined>(HomePageContext);
    
    if (!context) {
        throw new Error("SimonSaysButton must be used within a HomePageContextProvider");
    }

    const { isSelected, setIsSelected, setDisplayTitle, setDisplayImage, setDescription, setPageLink } = context

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
