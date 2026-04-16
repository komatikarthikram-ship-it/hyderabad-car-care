import "@fontsource/oswald/400.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ReviewsSection />
    <GallerySection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
