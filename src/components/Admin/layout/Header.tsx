import React from 'react';
import { useNavigate } from 'react-router-dom';
import HStack from '../../../atoms/HStack';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function Header({ toggle, open }) {
  const navigate = useNavigate();
  return (
    <header className='fixed right-0 top-0 md:left-60 left-0 bg-gray-50 py-3 px-4 h-16'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center justify-between'>
          <HStack spacing='5' className='md:text-lg font-bold'>
            <img
              src='/logo.svg'
              loading='lazy'
              alt='logo'
              width={48}
              height={48}
              className='cursor-pointer z-[100]'
              onClick={() => {
                navigate('/admin');
                window.scrollTo(0, 0);
              }}
            />
            <h3>AKS Education Fund</h3>
          </HStack>
          <button
            className='md:hidden text-4xl text-orange-500  rounded-lg hover:text-white transition-colors ease-in-out hover:bg-orange-500'
            onClick={toggle}
          >
            {open ? <AiOutlineClose /> : <BiMenuAltRight />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
