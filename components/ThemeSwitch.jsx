import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeSwitch;
