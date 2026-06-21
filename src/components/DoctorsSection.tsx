import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { doctors } from "@/data/doctors";
import CTAButton from "./CTAButton";

export default function DoctorsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#013142] mb-4">
            Meet Our Specialists
          </h2>
          <p className="text-lg text-gray-600">
            Experienced doctors available across multiple specializations, with
            dedicated OPD timings throughout the week.
          </p>
        </div>

        {/* Desktop Grid / Mobile horizontal scroll */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 hide-scrollbar">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="w-[85vw] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#f8f9fa] shadow-sm relative bg-gray-100">
                  {/* Note: Swap placeholder with real photos */}
                  <Image
                    src={doctor.photoUrl}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#013142] mb-1">
                  {doctor.name}
                </h3>
                <p className="text-sm font-semibold text-[#0081cc] mb-3">
                  {doctor.qualification}
                </p>
                <span className="inline-block bg-[#fcba03]/20 text-[#013142] text-xs font-bold px-3 py-1 rounded-full">
                  {doctor.specialization}
                </span>
              </div>

              <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-xl p-4 mb-6">
                <Clock className="w-5 h-5 text-[#cf2d2d] mr-3 flex-shrink-0" />
                <p className="text-sm font-medium text-gray-700 text-left">
                  {doctor.schedule}
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  href={`/contact?doctor=${doctor.slug}`}
                  className="block w-full text-center border-2 border-[#0081cc] text-[#0081cc] hover:bg-[#0081cc] hover:text-white font-semibold rounded-lg py-2.5 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/doctors">View All Doctors</CTAButton>
        </div>
      </div>
    </section>
  );
}
