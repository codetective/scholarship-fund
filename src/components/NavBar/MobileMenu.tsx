import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import navbarLinks from '../../helpers/navbarLinks';
import NavbarLink from '../../atoms/NavbarLink';
import Button from '../../atoms/Button';
import { Link } from 'react-router-dom';

function MobileMenu() {
  const [toggle, setToggle] = useState(false);

  return (
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
          <Link to='/apply'>
            <Button className='hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-transparent md:border md:text-white bg-green-500'>
              Apply Now!
            </Button>{' '}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
