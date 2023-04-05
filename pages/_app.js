import Navbar from '@/Components/Header/Navbar';
import '../styles/styles.css'
import { GoogleFonts } from 'next-google-fonts';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // check if the user is logged in
    const token = localStorage.getItem('access_token');
    if (token) {
      // make a request to the server to get the user information
      const getUser = async () => {
        const { data } = await axios.get('http://localhost:3000/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(data)
        setUser(data.user)
      }
      getUser()
    }
  }, []);


  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap" />
      <Navbar user={user} logout={handleLogout}><Component {...pageProps} /></Navbar>
      <Toaster />
    </>
  )
}
