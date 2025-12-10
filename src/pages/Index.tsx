import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ParallaxDivider } from "@/components/ParallaxDivider";

import parallaxImg1 from "@/assets/gallery/midia_1.jpg";
import parallaxImg2 from "@/assets/gallery/midia_3.jpg";
import parallaxImg3 from "@/assets/gallery/midia_5.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ParallaxDivider imageSrc={parallaxImg1} alt="Estruturas metálicas Globe" />
        <ProductsSection />
        <ParallaxDivider imageSrc={parallaxImg2} alt="Galpões e coberturas Globe" />
        <ServicesSection />
        <ParallaxDivider imageSrc={parallaxImg3} alt="Projetos Globe Estruturas" />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
