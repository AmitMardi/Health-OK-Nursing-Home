import React from "react";

const scheduleItems = [
  "Dr. Lincoln Alam, MBBS, MS (Orthopedic Surgeon) — Every Saturday, 11:00 AM",
  "Dr. Ujjal Roy, MBBS, MS (General Surgeon) — Every Sunday, 2:00 PM",
  "Dr. Akhilesh Kumar Verma, MD (Radiology) — USG & Anomaly Scan on Mon, Tue, Wed, Fri & Sun",
];

export default function Marquee() {
  return (
    <div className="w-full bg-[#fcba03] text-[#013142] py-3 overflow-hidden relative border-b border-[#013142]/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* We double the content to create a seamless loop effect. In a real app, you might use Framer Motion or a marquee library. */}
        <div className="flex space-x-12 shrink-0 pr-12">
          {scheduleItems.map((item, index) => (
            <span key={index} className="font-semibold flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#cf2d2d] mr-3 inline-block"></span>
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-12 shrink-0">
          {scheduleItems.map((item, index) => (
            <span key={`dup-${index}`} className="font-semibold flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#cf2d2d] mr-3 inline-block"></span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
