import { useState, useEffect, createContext } from "react";
import { axiosInstance } from "../api/axiosConfig";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axiosInstance.get('?results=20');
      setUsers(response.data.results);
    } catch (error) {
      setError("Erro ao buscar usuários.");
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ users, loading, getUsers, error }}>
      {children}
    </UserContext.Provider>
  );
};
