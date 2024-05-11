import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.tsx';
import TicTacToePage from '../pages/TicTacToePage/TicTacToePage.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tictactoe" element={<TicTacToePage />} />
    </Routes>
  );
};

export default AppRoutes;