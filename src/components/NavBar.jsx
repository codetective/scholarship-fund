import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import NavbarLink from '../atoms/NavbarLink';
import navbarLinks from "../helpers/navbarLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "../atoms/Button";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggleDrawer, setToggleDrawer] = useState(false);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <header
      className={`sticky shadow-md top-0 right-0 left-0 bg-[#FBE7D5] h-24 z-[100]`}
    >
      <nav className="w-full h-full px-3 xl:px-0 flex items-center justify-between max-w-screen-lg mx-auto transition duration-200 ease-in">
        <img
          src="/logo.svg"
          loading="lazy"
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer z-[100]"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        />
        {!toggleDrawer ? (
          <AiOutlineMenu
            size={25}
            className="mr-4 z-[100] cursor-pointer md:hidden transition duration-200 ease-in"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />
        ) : (
          <AiOutlineClose
            size={25}
            className="mr-4 z-[100] cursor-pointer transition duration-200 ease-in"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />
        )}
        <div className="md:flex hidden flex-row justify-end items-center gap-4">
          <ul className="flex">
            {navbarLinks.map((link) => (
              <a key={link.name} href={link.path}>
                <li
                  className={`flex p-4 active:text-[#089887] active:bg-inherit`}
                  onClick={() => {
                    setToggleDrawer(false);
                    navigate(link.link);
                    window.scrollTo(0, 0);
                  }}
                >
                  <p
                    className={`ml-[20px] font-epilogue font-medium text-sm cursor-pointer ${
                      pathMatchRoute(link.link)
                        ? "text-[#089887]"
                        : "text-[#808191]"
                    }`}
                  >
                    {link.name}
                  </p>
                </li>
              </a>
            ))}
          </ul>
          {/* <Link to='/apply'> */}
          <Button
            onClick={() => {
              setToggleDrawer(false);
              navigate("/apply");
              window.scrollTo(0, 0);
            }}
            className="hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-white bg-green-500"
          >
            Apply Now!
          </Button>
          {/* </Link> */}
        </div>
      </nav>
      {/* small screen navigation */}
      <div className="md:hidden flex justify-between items-center relative z-[99]">
        <div
          className={`h-[100vh] absolute top-0 right-0 left-0 bottom-0 bg-[#FBE7D5] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navbarLinks.map((link) => (
              <a key={link.name} href={link.path}>
                <li
                  className={`flex p-4 active:text-[#089887] active:bg-inherit`}
                  onClick={() => {
                    setToggleDrawer(false);
                    navigate(link.link);
                    window.scrollTo(0, 0);
                  }}
                >
                  <p
                    className={`ml-[20px] font-epilogue font-medium text-sm cursor-pointer ${
                      pathMatchRoute(link.link)
                        ? "text-[#089887]"
                        : "text-[#808191]"
                    }`}
                  >
                    {link.name}
                  </p>
                </li>
              </a>
            ))}
          </ul>
          <div className="flex mx-4">
          <Button
            onClick={() => {
              setToggleDrawer(false);
              navigate("/apply");
              window.scrollTo(0, 0);
            }}
            className="hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-white bg-green-500"
          >
            Apply Now!
          </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;

// import { Link } from 'react-router-dom';
// import NavbarLink from '../atoms/NavbarLink';
// import Button from '../atoms/Button';
// import Container from '../atoms/Container';
// import LogoText from './Logo/LogoText';
// import navbarLinks from '../helpers/navbarLinks';
// import MobileMenu from './NavBar/MobileMenu';

// export default function Header() {
//   return (

//     );
//   }

// <header className='bg-[#FBE7D5] top-0 right-0 left-0 z-40'>
//   <Container>
//     <div className='flex justify-between py-5 mx-auto items-center'>
//       <LogoText />
//       <div className='flex items-center space-x-10 md:justify-center md:w-full'>
//         <ul className='hidden sm:flex space-x-7'>
//           {navbarLinks.map((link) => (
//             <NavbarLink key={link.path} to={link.path}>
//               {link.name}
//             </NavbarLink>
//           ))}
//           <Link to='/apply'>
//             <Button className='hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-white bg-green-500'>
//               Apply Now!
//             </Button>
//           </Link>
//         </ul>
//       </div>
//       <MobileMenu />
//     </div>
//   </Container>
//  </header>
