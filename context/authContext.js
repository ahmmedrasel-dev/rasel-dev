import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

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
        return response;
      }
    } catch (error) {
      throw (error);
    }
  };


  const logout = async () => {
    setUser(null);
    setAccessToken(null);
    router.push('/');
  };

  const isAuthenticated = () => {
    return !!accessToken;
  };

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
