import React, { useContext, useState } from 'react';
import { TTTContext } from '../../TicTacToePageContext';
import { useNavigate } from 'react-router-dom';
import './TTTSideBar.css';

function TTTSideBar() {
  const { gameStatus, gameWinner, winningCombo } = useContext(TTTContext)
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleAnimationEnd = () => {
    setIsActive(false);
    navigate('/'); // Navigate after animation ends, using navigate
  };

  const handleMouseDown = () => {
    setIsActive(true); // Start animation
  };

  return (
    <div className="TTTSideBar">
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