import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import NavbarLink from '../atoms/NavbarLink';
import navbarLinks from '../helpers/navbarLinks';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Button from '../atoms/Button';
import ContainerWrap from '../atoms/ContainerWrap';

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
      <ContainerWrap>
        <nav className='w-full h-full  flex items-center justify-between mx-auto transition duration-200 ease-in'>
          <img
            src='/logo.svg'
            loading='lazy'
            alt='logo'
            width={50}
            height={50}
            className='cursor-pointer z-[100]'
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
          />
          {!toggleDrawer ? (
            <AiOutlineMenu
              size={25}
              className='mr-4 z-[100] cursor-pointer md:hidden transition duration-200 ease-in'
              onClick={() => setToggleDrawer((prev) => !prev)}
            />
          ) : (
            <AiOutlineClose
              size={25}
              className='mr-4 z-[100] cursor-pointer transition duration-200 ease-in'
              onClick={() => setToggleDrawer((prev) => !prev)}
            />
          )}
          <div className='md:flex hidden flex-row justify-end items-center gap-4'>
            <section className='flex'>
              {navbarLinks.map((link) => (
                <a key={link.name} href={`${location.pathname === "/apply" ? "/"  : link.path}`}>
                  <div
                    className={`flex p-4 active:text-[#089887] active:bg-inherit`}
                    onClick={() => {  
                      setToggleDrawer(false);
                      navigate("/");
                      setTimeout(() => {
                        const section = document.getElementById(`${link.name}`);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100); 
                    }}
                  >
                    <p
                      className={`heading-font hover:text-orange-500 font-epilogue font-medium text-md cursor-pointer ${
                        pathMatchRoute(link.link)
                          ? 'text-[#089887]'
                          : 'text-[#808191]'
                      }`}
                    >
                      {link.name}
                    </p>
                  </div>
                </a>
              ))}
            </section>

            <Button
              onClick={() => {
                window.scroll(0,0);
                setToggleDrawer(false);
                navigate('/apply');
              }}
              className='hover:bg-orange-900 md:bg-[#FF7900] md:border-[#FF7900] text-white'
            >
              Apply Now!
            </Button>
          </div>
        </nav>
        {/* small screen navigation */}
        <div className='md:hidden flex justify-between items-center relative z-[99]'>
          <div
            className={`h-[100vh] absolute top-0 right-0 left-0 bottom-0 bg-[#FBE7D5] z-10 shadow-secondary py-4 ${
              !toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'
            } transition-all duration-700`}
          >
            <section className='mb-4'>
              {navbarLinks.map((link) => (
                <a key={link.name} href={`${location.pathname === "/apply" ? "/"  : link.path}`}>
                <div
                  className={`flex p-4 active:text-[#089887] active:bg-inherit`}
                  onClick={() => {  
                    setToggleDrawer(false);
                    navigate("/");
                    setTimeout(() => {
                      const section = document.getElementById(`${link.name}`);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100); 
                  }}
                >
                  <p
                    className={`heading-font hover:text-orange-500 font-epilogue font-medium text-md cursor-pointer ${
                      pathMatchRoute(link.link)
                        ? 'text-[#089887]'
                        : 'text-[#808191]'
                    }`}
                  >
                    {link.name}
                  </p>
                </div>
              </a>
              ))}
            </section>
            <div className='flex mx-4'>
              <Button
                onClick={() => {
                  window.scrollTo(0, 0);
                  setToggleDrawer(false);
                  navigate('/apply');
                }}
                className='hover:bg-orange-900 md:bg-[#FF7900] md:border-[#FF7900] text-white'
              >
                Apply Now!
              </Button>
            </div>
          </div>
        </div>
      </ContainerWrap>
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
