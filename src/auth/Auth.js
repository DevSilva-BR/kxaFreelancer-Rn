import React, { useState, createContext } from "react";
export const AuthContext = createContext({});

export const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        // Provider é usado para fornecer valor ao objeto de contexto
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
