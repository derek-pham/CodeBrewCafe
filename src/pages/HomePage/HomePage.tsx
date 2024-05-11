import React from 'react';
import './HomePage.css';
import SideBar from './components/SideBar/SideBar';
import MainMenu from './components/MainMenu/MainMenu';

function HomePage() {
  return (
    <div className="homepage">
      <div className="content">
      <SideBar/>
      <MainMenu/>
      </div>
    </div>
  );
}

export default HomePage;