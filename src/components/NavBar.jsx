import { Link } from 'react-router-dom';
import NavbarLink from '../atoms/NavbarLink';
import Button from '../atoms/Button';
import Container from '../atoms/Container';
import LogoText from './Logo/LogoText';
import navbarLinks from '../helpers/navbarLinks';
import MobileMenu from './NavBar/MobileMenu';

export default function Header() {
  return (
    <header className='bg-[#FBE7D5] top-0 right-0 left-0 z-40'>
      <Container>
        <div className='flex justify-between py-5 mx-auto items-center'>
          <LogoText />
          <div className='flex items-center space-x-10'>
            <ul className='hidden sm:flex space-x-7'>
              {navbarLinks.map((link) => (
                <NavbarLink key={link.path} to={link.path}>
                  {link.name}
                </NavbarLink>
              ))}
              <Link to='/apply'>
                <Button className='hover:bg-green-900 md:hover:bg-white md:hover:text-green-500 md:bg-[#FF7900] md:border-[#FF7900] md:text-[#01100B] bg-green-500'>
                  Apply Now!
                </Button>
              </Link>
            </ul>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
