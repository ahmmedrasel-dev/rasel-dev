import Navbar from '@/Components/Header/Navbar';
import '../styles/styles.css'
import { GoogleFonts } from 'next-google-fonts';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap" />
      <Navbar><Component {...pageProps} /></Navbar>

    </>
  )
}
