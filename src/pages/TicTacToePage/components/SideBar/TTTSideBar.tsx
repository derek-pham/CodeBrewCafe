import React, { useContext, useState, useEffect } from 'react';
import './TTTSideBar.css';

function TTTSideBar() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timeout = setTimeout(() => {
        setIsActive(false);  // Clears the animation property (starts as false)
      }, 500);  // Assuming the animation lasts 500ms

      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  return (
    <div className="SideBar">
      <button
        id='backbutton'
        onMouseDown={() => setIsActive(true)}
        className={isActive ? 'active' : ''}
        style={{ animation: isActive ? 'click 0.5s forwards' : 'none' }}
      >
        BACK
      </button>
    </div>
  );
}

export default TTTSideBar;