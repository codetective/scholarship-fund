import {
  AboutSection,
  BenefitsSection,
  CriteriaSection,
  FinalSection,
  FooterSection,
  GovernorSection,
  HeroSection,
} from '../components/landing';
import GallerySection from '../components/landing/GallerySection';

export default function Home() {
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
