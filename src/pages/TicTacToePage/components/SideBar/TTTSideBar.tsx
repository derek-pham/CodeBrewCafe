import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../../hooks/useTheme';
import themeSwitch from '../../../HomePage/components/SideBar/dark-mode.png'
import './TTTSideBar.css';

function TTTSideBar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const toggleTheme = useTheme();

  const handleAnimationEnd = () => {
    setIsActive(false);
    navigate('/'); // Navigate after animation ends, using navigate
  };

  const handleMouseDown = () => {
    setIsActive(true); // Start animation
  };

  return (
    <div className="TTTSideBar">
      <button id='theme-button-ttt' onClick={toggleTheme}>
        <img src={themeSwitch} alt="" />
      </button>
      <button
        id='backbutton'
        onMouseDown={handleMouseDown}
        onAnimationEnd={handleAnimationEnd} // Add event listener for animation end
        className={isActive ? 'active' : ''}
      >
        BACK
      </button>
    </div>
  );
}

export default TTTSideBar;