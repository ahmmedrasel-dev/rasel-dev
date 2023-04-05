import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
import { FaNewspaper, FaUserAlt } from 'react-icons/fa';
import { HiOutlineViewGrid, HiChat } from 'react-icons/hi';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div className={`${styles.sideMenu} lg:w-52 w-full z-40 lg:block hidden`}>
        <ul className='menuItem'>
          <li className='flex lg:flex-row-reverse lg:items-center'>
            <Link className='p-4 bg-slate-700 rounded-full hover:bg-success' href='/'><IoHome className='text-2xl' /></Link>
            <h2>Home</h2>
          </li>
          <li className='flex lg:flex-row-reverse lg:items-center'>
            <Link className='p-4 bg-slate-700 rounded-full hover:bg-success' href='/about-me'><FaUserAlt className='text-2xl' /></Link>
            <h2>About Me</h2>
          </li>
          <li className='flex lg:flex-row-reverse lg:items-center'>
            <Link className='p-4 bg-slate-700 rounded-full hover:bg-success' href='/projects'><HiOutlineViewGrid className='text-2xl' /></Link>
            <h2>Projects</h2>
          </li>

          <li className='flex lg:flex-row-reverse lg:items-center'>
            <Link className='p-4 bg-slate-700 rounded-full hover:bg-success' href='/blog'><FaNewspaper className='text-2xl' /></Link>
            <h2>Blog</h2>
          </li>

          <li className='flex lg:flex-row-reverse lg:items-center'>
            <Link className='p-4 bg-slate-700 rounded-full hover:bg-success' href='/contact'><HiChat className='text-2xl' /></Link>
            <h2>Contact</h2>
          </li>

        </ul>
      </div>
    </>
  );
};

export default Navbar;