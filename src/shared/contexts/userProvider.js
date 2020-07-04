import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState({});

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
}

export const useUserStore = () => useContext(UserContext);