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
      className="themeSwitch"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeSwitch;
