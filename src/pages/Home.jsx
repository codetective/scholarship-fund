import {
  AboutSection,
  BenefitsSection,
  CriteriaSection,
  FinalSection,
  FooterSection,
  GovernorSection,
  HeroSection,
} from "../components/landing";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <CriteriaSection />
      <GovernorSection />
      <FinalSection />
      <FooterSection />
    </main>
  );
}
