import React, { useContext, useState, useEffect } from 'react';
import './SideBar.css';
import { HomePageContext } from '../../HomePageContext';

function SideBar() {
  const { displayTitle, displayImage, description } = useContext(HomePageContext);
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
      <img src={displayImage} alt="thumbnail" />
      <p id='displayTitle'>{displayTitle}</p>
      <p id='description'>{description}</p>
      <button
        id='gobutton'
        onMouseDown={() => setIsActive(true)}
        className={isActive ? 'active' : ''}
        style={{ animation: isActive ? 'click 0.5s forwards' : 'none' }}
      >
        GO
      </button>
    </div>
  );
}

export default SideBar;