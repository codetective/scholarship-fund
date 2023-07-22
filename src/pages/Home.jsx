import { useEffect } from 'react';
import {
  AboutSection,
  BenefitsSection,
  CriteriaSection,
  FinalSection,
  FooterSection,
  GallerySection,
  GovernorSection,
  HeroSection,
} from '../components/landing';
// import GallerySection from '../components/landing/GallerySection';

export default function Home() {
  useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <main className=''>
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <CriteriaSection />
      <GovernorSection />
      <GallerySection />
      <FinalSection />
      <FooterSection />
    </main>
  );
}
