import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import InsuranceSection from "@/components/InsuranceSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import TestimonialStrip from "@/components/TestimonialStrip";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <InsuranceSection />
      <EmergencyBanner />
      <TestimonialStrip />
    </>
  );
}
