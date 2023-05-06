import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email, password
      });
      if (response.status === 200) {
        setUser(response.data.user);
        setAccessToken(response.data.accessToken);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        return response;
      }
    } catch (error) {
      throw (error);
    }
  };

  const logout = async () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    router.push('/');
  };

  const isAuthenticated = () => {
    return !!accessToken;
  };

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedAccessToken && storedUser) {
      setAccessToken(storedAccessToken);
      setUser(storedUser);
    }
  }, []);

  const authContextValue = {
    user,
    accessToken,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
