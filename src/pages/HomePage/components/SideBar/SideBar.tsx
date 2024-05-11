import React, { useContext } from 'react';
import './SideBar.css';
import { HomePageContext } from '../../HomePageContext';

function SideBar() {
  const { displayTitle, displayImage } = useContext(HomePageContext)

  return (
    <div className="SideBar">
      <img src={displayImage} alt="thumbnail" />
      <p>{displayTitle}</p>
    </div>
  );
}

export default SideBar;