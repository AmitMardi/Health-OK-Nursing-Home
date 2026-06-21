import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex items-center mt-[72px] md:mt-[140px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-[#013142]/70 z-10" /> {/* Dark gradient overlay */}
        <Image
          src="/indian_hospital_facility.png"
          alt="Health OK Nursing Home Facility"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-white">
        <div className="max-w-3xl animate-in slide-in-from-bottom-8 duration-1000 fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Trusted Multi-Specialty Healthcare in Dakshin Dinajpur
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Quality care, modern facilities, and a team that puts patients first.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <CTAButton href="tel:03524296296" className="w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-4 text-lg bg-[#013142] hover:bg-[#024a63]">
              <Phone className="w-5 h-5" />
              Call Now
            </CTAButton>
            <CTAButton href="/contact" variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-[#013142]">
              Book Appointment / Contact Us
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
