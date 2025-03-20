"use client"; // ✅ Important for Next.js App Router

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`https://backendbatd.clinstitute.co.uk/api/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setIsAuthenticated(true);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        });
    }
    setLoading(false);
  }, []);

  const login = async (username, password, language) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("locale", language);

    try {
        const res = await fetch(`https://backendbatd.clinstitute.co.uk/api/login`, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("token", data.token);
            setIsAuthenticated(true);
            setUser(data.user);
            setTimeout(() => {
              router.push("/");
            }, 100);
            throw new Error(data.message || "Invalid login credentials");
        }
    } catch (error) {
        console.error("Login error:", error.message);
        return error.message; // Return the error message so it can be displayed
    }
};


  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
    router.push("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
