import HeroSection from "@/components/sections/hero-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import ProductsSection from "@/components/sections/products-section";
import IndustriesSection from "@/components/sections/industries-section";
import CaseStudiesSection from "@/components/sections/case-studies-section";
import CareersCtaSection from "@/components/sections/careers-cta-section";
import CtaSection from "@/components/sections/cta-section";
import ClientsSection from "@/components/sections/clients-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <TechStackSection />
      <ProductsSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <CtaSection />
      <CareersCtaSection />
    </>
  );
}
