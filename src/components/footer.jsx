import { Link } from 'react-router-dom';
import { BsTwitter, BsLinkedin, BsGithub, BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import logo from '../assets/brand/logo.svg';

const Footer = () => {
  const links = [
    { label: 'Communities', href: '/communities' },
    { label: 'Upcoming Events', href: '/events' },
    { label: 'Executive Leaders', href: '/executive-leaders' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Support', href: '/support' }
  ];

  return (
    <footer className="my-12">
      <div className="container px-3">
        <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 sm:gap-16">
          <section className="flex flex-col gap-16">
            <Link to="/">
              <div className="flex items-center gap-4">
                <img
                  src={logo}
                  className="w-full max-w-[60px]"
                  loading="lazy"
                  alt="meru-innovation-club-logo"
                />
                <span className="text-bold text-xl uppercase text-green sm:block sm:text-2xl">
                  meru innovation club
                </span>
              </div>
            </Link>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-blue sm:text-4xl">Contact Us</h2>
              <div className="mb-10 flex items-center gap-6 text-maroon">
                <Link to="https://twitter.com" target="_blank">
                  <BsTwitter size={25} />
                </Link>
                <Link to="https://linkedin.com" target="_blank">
                  <BsLinkedin size={25} />
                </Link>
                <Link to="https://github.com" target="_blank">
                  <BsGithub size={25} />
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-3">
                  <BsTelephone size={20} className="text-maroon" />{' '}
                  <span className="block text-sm sm:text-base">+254 716 162 162</span>
                </span>
                <span className="flex items-center gap-3">
                  <AiOutlineMail size={20} className="text-maroon" />{' '}
                  <span className="block text-sm sm:text-base">mustinnovators@gmail.com</span>
                </span>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-6 text-2xl font-bold text-blue sm:text-4xl">Quick Links</h2>
            <ul className="flex flex-col gap-6 text-xl">
              {links?.map((link) => (
                <li key={link.label} className="text-sm sm:text-base">
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
