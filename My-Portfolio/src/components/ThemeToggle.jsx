import { useEffect } from 'react';

const ThemeToggle = () => {
  useEffect(() => {
    // Ensure dark class is removed so light theme styles show
    document.documentElement.classList.remove('dark');
    // Persist preference
    try {
      localStorage.setItem('theme', 'light');
    } catch (e) {}
  }, []);

  return null;
};

export default ThemeToggle;