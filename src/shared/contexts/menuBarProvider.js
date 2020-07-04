import React, { useState, createContext, useContext } from 'react';

const MenuBarContext = createContext(false);

export function MenuBarProvider({ children }) {
    const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);

    const toggleMenuBar = () => {
        setIsMenuBarOpen(!isMenuBarOpen);
    }

    return <MenuBarContext.Provider value={{isMenuBarOpen, toggleMenuBar}}>{children}</MenuBarContext.Provider>;
}

export const useMenuBarStore = () => useContext(MenuBarContext);