import React, { useState, createContext, useContext } from 'react';

import { ThemeProvider } from "@material-ui/core";

import { light, dark } from "../../shared/theme";

const AppThemeContext = createContext(null);

export function AppThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <AppThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            <ThemeProvider theme={isDarkMode == true ? dark : light}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
}

export const useThemeStore = () => useContext(AppThemeContext);