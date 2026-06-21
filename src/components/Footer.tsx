import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#013142] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <Image
              src="/logo.png"
              alt="Health OK Nursing Home"
              width={180}
              height={60}
              className="h-12 w-auto mb-6 bg-white p-2 rounded"
            />
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Health OK Nursing Home is a unique place created with quality
              healthcare in mind. Our mission is to provide patients with
              professional service, individual care, safety, and comfort.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#fcba03] hover:text-[#013142] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">
              Useful Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#fcba03] transition-colors">
                  Swasthya Sathi Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#fcba03] transition-colors">
                  Empaneled Hospitals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#fcba03] transition-colors">
                  Verify Your Card
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#fcba03] transition-colors">
                  Staff Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Terms & Condition */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">
              Terms & Condition
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#fcba03] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#fcba03] transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#fcba03] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#fcba03] flex-shrink-0 mt-0.5" />
                <span>College More, Buniadpur, Dakshin Dinajpur, West Bengal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#fcba03] flex-shrink-0" />
                <span>03524-296296 / 9143287928</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#fcba03] flex-shrink-0" />
                <span>info@healthokdd.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Health OK Nursing Home – All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
