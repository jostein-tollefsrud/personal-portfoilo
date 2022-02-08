import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      aria-label="dark mode toggle"
      className="themeSwitch"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <FiMoon aria-hidden="true" />
      ) : (
        <FiSun aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeSwitch;
