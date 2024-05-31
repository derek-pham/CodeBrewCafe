import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.tsx';
import TicTacToePage from '../pages/TicTacToePage/TicTacToePage.tsx';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tictactoe" element={<TicTacToePage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
    </Routes>
  );
};

export default AppRoutes;