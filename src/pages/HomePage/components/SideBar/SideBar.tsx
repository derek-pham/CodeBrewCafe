import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';
import { HomePageContext } from '../../HomePageContext';
import { HomePageContextType } from '../../homePageContextTypes';
import { useTheme } from '../../../../hooks/useTheme'
import themeSwitch from './dark-mode.png'

function SideBar() {
  const navigate = useNavigate();
  const context = useContext<HomePageContextType | undefined>(HomePageContext);

  if (!context) {
    throw new Error("SideBar must be used within a HomePageContextProvider");
  }
  
  const { displayTitle, displayImage, description, pageLink } = context;
  const [isActive, setIsActive] = useState(false);
  const toggleTheme = useTheme();

  const handleAnimationEnd = () => {
    setIsActive(false);
    navigate(pageLink); // Navigate after animation ends, using navigate
  };

  const handleMouseDown = () => {
    setIsActive(true); // Start animation
  };

  return (
    <div className="SideBar">
      <button id='theme-button' onClick={toggleTheme}>
        <img src={themeSwitch} alt="" />
      </button>
      <img src={displayImage} alt="thumbnail" />
      <p id='displayTitle'>{displayTitle}</p>
      <p id='description'>{description}</p>
      {pageLink != '#' ? <button
        id='gobutton'
        onMouseDown={handleMouseDown}
        onAnimationEnd={handleAnimationEnd}
        className={isActive ? 'active' : ''}
      >
        GO
      </button> : ''}
    </div>
  );
}

export default SideBar;