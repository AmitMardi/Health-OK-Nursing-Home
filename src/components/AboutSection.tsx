import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Decades of experience",
    "24/7 Emergency care",
    "Qualified team of Doctors",
    "Modern Machines",
    "118 Beds Capacity",
    "Equipped with ICU & NICU",
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-video sm:aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="/indian_hospital_facility.png"
                alt="Health OK Nursing Home Interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0081cc] rounded-full opacity-20 -z-10 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#fcba03] rounded-full opacity-20 -z-10 blur-2xl"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <span className="text-[#0081cc] font-bold tracking-wider uppercase text-sm mb-2 block">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#013142] leading-tight mb-6">
                Service Beyond the Limits
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Health OK Nursing Home is a unique place created with quality healthcare
                in mind. Our mission is to provide patients with professional service,
                individual care, safety, and comfort. We are committed to ensuring
                the highest standards of medical excellence in Dakshin Dinajpur.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0081cc] flex-shrink-0" />
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
