import React from 'react';
import { AiFillHome, AiOutlineOrderedList } from 'react-icons/ai';
import { FaDoorOpen } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const Linkclasses =
  'flex items-center hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4';

function Sidebar({ toggle = false }) {
  const { loading, logout } = useAuth();

  return (
    <aside
      className={`fixed transition-all ease inset-y-0 left-0 bg-white shadow-md max-h-screen w-60 md:translate-x-0 ${
        toggle ? '' : '-translate-x-full'
      }`}
    >
      <div className='flex flex-col justify-between h-full'>
        <div className='flex-grow'>
          <div className='px-4 py-6 border-b'>
            <h1 className='text-xl font-bold leading-none'>
              <span className='text-gray-800'>Dashboard</span>
            </h1>
          </div>
          <div className='p-4'>
            <ul className='space-y-1'>
              <li>
                <NavLink
                  end
                  to='/admin'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? Linkclasses
                      : isActive
                      ? Linkclasses + ' bg-gray-100'
                      : Linkclasses
                  }
                >
                  <div className='text-xl px-4'>
                    <AiFillHome />
                  </div>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/applications'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? Linkclasses
                      : isActive
                      ? Linkclasses + ' bg-gray-100'
                      : Linkclasses
                  }
                >
                  <div className='text-xl px-4'>
                    <AiOutlineOrderedList />
                  </div>
                  Applications
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='p-4'>
          <button
            onClick={() => logout!()}
            className='rounded-xl p-4 w-full flex items-center bg-red-50 hover:bg-red-500'
          >
            <div className='text-xl px-4'>
              <FaDoorOpen />
            </div>
            <span className='font-bold text-sm ml-2'>
              {loading ? 'loading...' : 'Logout'}
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
