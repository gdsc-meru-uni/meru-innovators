import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { VscAccount } from 'react-icons/vsc';
import logo from '../assets/brand/logo.svg';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const links = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Communities', href: '/communities' },
    { label: 'Events', href: '/events' },
    { label: 'Updates', href: '/updates' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Support', href: '/support' }
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-4">
            <img src={logo} className="w-full max-w-[60px]" alt="meru-innovation-club-logo" />
            <span className="hidden text-xl uppercase text-white sm:block sm:text-2xl">
              meru innovation club
            </span>
          </div>
        </Link>
        <nav>
          <ul className="flex items-center gap-4 sm:gap-8">
            <li>
              <Link to="/signup">
                <span className="flex items-center gap-2">
                  <VscAccount size={30} className="text-blue " />
                  <span className="block text-lg text-white sm:text-xl">Login</span>
                </span>
              </Link>
            </li>
            <li className="cursor-pointer" onClick={() => setShow((prev) => !prev)}>
              {show ? (
                <RxCross1 size={30} className="text-white" />
              ) : (
                <FiMenu size={30} className="text-white" />
              )}
            </li>
          </ul>
        </nav>
      </div>
      {show && (
        <div className="absolute right-0 top-16">
          <div className="w-[300px] rounded-lg bg-green bg-opacity-90 sm:w-[400px]">
            <div className="p-8">
              <nav>
                <ul className="flex flex-col gap-6 text-xl text-white ">
                  {links?.map((link) => (
                    <li key={link.label} className="hover:text-yellow">
                      <Link to={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
