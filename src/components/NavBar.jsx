/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import navbarLinks from '../helpers/navbarLinks';
import NavbarLink from '../atoms/NavbarLink';
import Button from '../atoms/Button';
import Container from '../atoms/Container';
export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className='bg-transparent absolute top-0 right-0 left-0 z-40'>
      <Container>
        <div className='flex justify-between py-5 mx-auto items-center'>
          <div>
            <h1 className='font-bold text-4xl text-blue-500 cursor-pointer'>
              Raise<span className='text-orange-500'>Me</span>
            </h1>
          </div>
          <div className='flex items-center space-x-10'>
            <ul className='hidden sm:flex space-x-7'>
              {navbarLinks.map((link) => (
                <NavbarLink key={link.path} to={link.path}>
                  {link.name}
                </NavbarLink>
              ))}
              <Link to='/apply'>
                <Button variant='outline'>Apply Now!</Button>
              </Link>
            </ul>
          </div>
          {/* Mobile */}
          <div className='sm:hidden flex flex-1 justify-end items-center py-3'>
            {toggle ? (
              <MdClose
                onClick={() => setToggle(!toggle)}
                className='w-[28px] h-[28px] text-white object-contain cursor-pointer transition duration-200 ease-in-out z-[100]'
              />
            ) : (
              <MdMenu
                onClick={() => setToggle(!toggle)}
                className='w-[28px] h-[28px] object-contain cursor-pointer transition duration-200 ease-in-out z-[100]'
              />
            )}

            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } flex-col p-6 bg-gradient-to-r from-gray-600 via-gray-700 to-black absolute top-3  -right-4 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition duration-200 ease-in-out`}
            >
              <ul className='flex justify-end items-start flex-col '>
                {navbarLinks.map((link) => (
                  <NavbarLink key={link.path} to={link.path}>
                    {link.name}
                  </NavbarLink>
                ))}
              </ul>
              <ul className='flex items-center space-x-2'>
                <li className='py-3 px-4 border rounded-xl font-semibold'>
                  Sign Up
                </li>
                <li className='py-3 px-4 bg-orange-400 text-white rounded-xl font-semibold'>
                  Sign In
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
