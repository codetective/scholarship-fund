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
