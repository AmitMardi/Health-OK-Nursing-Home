import React from "react";
import Link from "next/link";
import { Star, Globe, MessageCircle } from "lucide-react";

export default function TestimonialStrip() {
  return (
    <div className="bg-[#013142] py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          <div className="flex items-center space-x-1 mb-2 md:mb-0 md:mr-6">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#fcba03] fill-[#fcba03]" />
            ))}
            <Star className="w-6 h-6 text-[#fcba03] fill-[#fcba03] opacity-50" />
            <span className="text-white font-bold text-lg ml-2">4.5/5</span>
          </div>
          <p className="text-white text-center md:text-left md:border-l border-white/20 md:pl-6 text-lg">
            We are open <strong className="text-[#fcba03]">24x7</strong> with the most reliable healthcare services.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors border border-white/20"
          >
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="font-semibold">Review Us</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors border border-white/20"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span className="font-semibold">Google</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
