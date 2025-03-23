import { Children, createContext, useContext, useState } from 'react';
  const [theme, setTheme] = useState("light");
export const ThemeContext = createContext(undefined)
export const ThemeProvider = <ThemeContext.Provider value={{
    theme,
    toggleTheme: () => {
    setTheme(theme==="light"?"dark":"light");
    }

}}>
    {Children}
</ThemeContext.Provider>
export const useTheme = () =>useContext(ThemeContext);

