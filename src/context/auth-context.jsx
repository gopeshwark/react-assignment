import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user") || null)
    );

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:3001/api/login", inputs, {
            withCredentials: true,
        })
        setCurrentUser(res.data?.data);
    }

    const logout = async () => {
        const res = await axios.get("http://localhost:3001/api/logout")
        if (res) {
            setCurrentUser(null);
        }
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}