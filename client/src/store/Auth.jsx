import React, { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem("user");
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error("Failed to parse user data", error);
            return null;
        }
    });

    const storeUserInLS = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    const logoutUser = async () => {
        try {
            // Call backend logout API if needed
            await fetch('http://localhost:5000/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });
            
            // Clear frontend auth state
            localStorage.removeItem("user");
            setUser(null);
            
            return true;
        } catch (error) {
            console.error("Logout error:", error);
            return false;
        }
    };

    const isLoggedIn = () => {
        return !!user; // Simple check for user existence
    };

    return (
        <AuthContext.Provider value={{ 
            user,
            storeUserInLS, 
            logoutUser, 
            isLoggedIn
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export default AuthContext;