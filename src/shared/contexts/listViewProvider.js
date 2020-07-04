import React, { useState, createContext, useContext } from 'react';

const ListViewContext = createContext(false);

export function ListViewProvider({ children }) {
    const [isListView, setIsListView] = useState(false);

    const toggleView = () => {
        setIsListView(!isListView);
    }
    return <ListViewContext.Provider value={{isListView, toggleView}}>{children}</ListViewContext.Provider>;
}

export const useListViewStore = () => useContext(ListViewContext);