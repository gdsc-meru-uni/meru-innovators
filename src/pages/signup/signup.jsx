import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SignUp = () => {
  const [show, setShow] = useState(false);

  const handlePasswordShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <main className="mt-8">
      <section className="flex items-center justify-center">
        <form className="block w-full max-w-[500px] rounded-lg bg-[#fff] px-4 py-6 shadow-2xl md:px-6">
          <div className="mb-4">
            <h2 className="text-center text-3xl font-semibold leading-none text-maroon md:text-4xl">
              Sign Up
            </h2>
          </div>
          <label htmlFor="username" className="block">
            <span className="mb-1 block text-[17px] font-medium">Username</span>
            <div className="mb-4 rounded-md border border-blue p-3">
              <input
                type="text"
                name="username"
                id="username"
                className="bg-transparent w-full border-none outline-none"
                placeholder="Enter username"
              />
            </div>
          </label>
          <label htmlFor="email" className="block">
            <span className="mb-1 block text-[17px] font-medium">Email</span>
            <div className="mb-4 rounded-md border border-blue p-3">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-transparent w-full border-none outline-none"
                placeholder="Enter email"
              />
            </div>
          </label>
          <label htmlFor="password" className="block">
            <span className="mb-1 block text-[17px] font-medium">Password</span>
            <div className="mb-8 flex items-center justify-between rounded-md border border-blue p-3">
              <input
                type={show ? 'text' : 'password'}
                name="password"
                id="password"
                className="bg-transparent w-full border-none outline-none"
                placeholder="Enter password"
              />
              {show ? (
                <AiOutlineEyeInvisible
                  className="h-[20px] w-[20px] cursor-pointer"
                  onClick={handlePasswordShow}
                />
              ) : (
                <AiOutlineEye
                  className="h-[20px] w-[20px] cursor-pointer"
                  onClick={handlePasswordShow}
                />
              )}
            </div>
          </label>
          <button
            type="submit"
            className="w-full rounded-[8px] bg-blue px-[40px] py-[10px] text-lg text-white transition-all duration-1000 hover:bg-opacity-80">
            Continue
          </button>
          <p className="my-6 text-center text-[14px] text-maroon opacity-80 md:text-[17px]">
            Signup or Login with social networks
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="cursor-pointer rounded-full bg-green px-6 py-3">
              <FaFacebookF color="#fff" />
            </div>
            <div className="cursor-pointer rounded-full bg-green px-6 py-3">
              <BsGoogle color="#fff" />
            </div>
            <div className="cursor-pointer rounded-full bg-green px-6 py-3">
              <BsGithub color="#fff" />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
