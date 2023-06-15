import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { VscAccount } from 'react-icons/vsc';
import logo from '../assets/brand/logo.svg';

const Navbar = () => {
  const [show, setShow] = useState(false);

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
              <Link to="/login">
                <span className="flex items-center gap-2">
                  <VscAccount size={30} className="text-maroon " />
                  <span className="block text-lg text-white sm:text-xl">Login</span>
                </span>
              </Link>
            </li>
            <li className="cursor-pointer" onClick={() => setShow((prev) => !prev)}>
              <FiMenu size={30} className="text-white" />
            </li>
          </ul>
        </nav>
      </div>
      {show && (
        <div className="absolute right-0 top-16">
          <div className="w-[250px] rounded-xl border border-white bg-white sm:w-[350px]">
            <div className="p-4">
              <ul className="flex flex-col gap-6 text-xl">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/communities">Communities</Link>
                </li>
                <li>
                  <Link to="/">Events</Link>
                </li>
                <li>
                  <Link to="/">Updates</Link>
                </li>
                <li>
                  <Link to="/">Alumni</Link>
                </li>
                <li>
                  <Link to="/">Testimonials</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link>Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
