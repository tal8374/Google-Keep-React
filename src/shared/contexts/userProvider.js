import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children, user }) {
    const [isListView, setListView] = useState(user && user.listMode);

    const userValue = [{
        name: user && user.name,
        email: user && user.email,
        isListView
    }, {
        toggleView: () => setListView(!isListView)
    }];
    return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>;
}

export const useUserStore = () => useContext(UserContext);