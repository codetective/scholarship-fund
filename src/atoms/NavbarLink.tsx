import React from 'react';
import { pathMatchRoute } from '../helpers/pathMatchRoute';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarLinkProps {
  children: React.ReactNode;
  to: string;
}

function NavbarLink({ children, to }: NavbarLinkProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveStyles = pathMatchRoute(to, location.pathname)
    ? 'text-black border-b-red-500'
    : 'text-[#01100B] border-b-transparent';

  return (
    <li
      className={`cursor-pointer py-2 text-shadow text-md font-medium border-b-[3px] underline-on-hover ${isActiveStyles}`}
      onClick={() => navigate(to)}
    >
      {children}
    </li>
  );
}

export default NavbarLink;
