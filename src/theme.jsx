import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'black', toggleTheme: () => {} });

function storedTheme() {
  const current = document.documentElement.dataset.theme;
  if (current === 'white' || current === 'black') return current;
  return 'black';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('site-theme', theme);
    } catch {
      /* private mode */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((value) => (value === 'black' ? 'white' : 'black'));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
