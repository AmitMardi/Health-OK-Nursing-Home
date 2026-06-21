import React from "react";
import { PhoneCall } from "lucide-react";
import CTAButton from "./CTAButton";

export default function EmergencyBanner() {
  return (
    <section className="bg-[#cf2d2d] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/20">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              24/7 Emergency & Ambulance Service
            </h2>
            <p className="text-red-100 text-lg">
              We are always ready to handle medical emergencies. Don't hesitate to call.
            </p>
          </div>
          
          <div className="shrink-0">
            <CTAButton 
              href="tel:+919143287928" 
              className="bg-white text-[#cf2d2d] hover:bg-gray-100 text-lg px-8 py-4 flex items-center shadow-xl"
            >
              <PhoneCall className="w-6 h-6 mr-3 animate-pulse" />
              Call Now
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
