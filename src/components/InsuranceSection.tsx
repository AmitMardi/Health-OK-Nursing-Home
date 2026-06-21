import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function InsuranceSection() {
  const insurers = [
    { id: 1, name: "Care Health Insurance", src: "/logo1.png" },
    { id: 2, name: "ICICI Lombard", src: "/logo2.png" },
    { id: 3, name: "HDFC ERGO", src: "/logo3.png" },
    { id: 4, name: "SBI General Insurance", src: "/logo4.jpg" },
    { id: 5, name: "ICICI Lombard", src: "/logo5.png" },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#0081cc] px-4 py-2 rounded-full mb-6 font-semibold shadow-sm border border-blue-100">
            <ShieldCheck className="w-5 h-5" />
            <span>Swasthya Sathi Empaneled Hospital</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#013142] max-w-2xl">
            We are Empaneled with all the Leading Health Insurance Providers
          </h2>
        </div>

        {/* Logo Strip Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16 opacity-90 transition-opacity duration-300">
          {insurers.map((insurer) => (
            <div
              key={insurer.id}
              className="w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 relative flex items-center justify-center transition-transform duration-300 cursor-pointer transform hover:scale-110"
            >
              <Image
                src={insurer.src}
                alt={`${insurer.name} Logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
