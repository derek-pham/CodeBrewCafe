import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    // Apply the saved theme or default to 'light'
    const theme = localStorage.getItem('theme') ?? 'light';
    document.body.setAttribute('data-theme', theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Persist theme preference
  };

  return toggleTheme;
};
