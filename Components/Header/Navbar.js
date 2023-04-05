import Link from "next/link";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="mobaile-nav" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar">
            <div className="flex-1 px-2 mx-2">Rasel Dev</div>
            <div className="flex-none lg:hidden">
              <label htmlFor="mobaile-nav" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/projects'}>Projects</Link></li>
                <li><Link href={'/blogs'}>Blogs</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="mobaile-nav" className="drawer-overlay"></label>
          <ul className="menu p-4 lg:w-80 w-[80%] bg-neutral">
            {/* <!-- Sidebar content here --> */}
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Projects</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;