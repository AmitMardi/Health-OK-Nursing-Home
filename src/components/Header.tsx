"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import CTAButton from "./CTAButton";

const TopUtilityBar = () => (
  <div className="hidden md:flex items-center justify-between bg-[#f8f9fa] px-6 py-2 text-sm text-gray-600 border-b border-gray-200">
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <Phone className="w-4 h-4 text-[#0081cc]" />
        <span>03524-296296</span>
      </div>
      <div className="flex items-center space-x-2">
        <Mail className="w-4 h-4 text-[#0081cc]" />
        <span>info@healthokdd.com</span>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Link href="#" className="hover:text-[#0081cc] transition-colors">
        Facebook
      </Link>
      <Link href="#" className="hover:text-[#0081cc] transition-colors">
        Google Reviews
      </Link>
    </div>
  </div>
);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  { name: "Contact Us", href: "/contact" },
  { name: "Staff Login", href: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex flex-col z-50 fixed w-full top-0 transition-all duration-300">
      <TopUtilityBar />
      <div
        className={cn(
          "bg-white transition-all duration-300",
          isScrolled ? "shadow-md py-2" : "py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Health OK Nursing Home"
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#0081cc] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <CTAButton
              href="tel:+919143287928"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-[#cf2d2d] hover:bg-[#a62424] text-white"
            >
              <Phone className="w-4 h-4" />
              <span>AMBULANCE</span>
            </CTAButton>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-xl flex flex-col pt-20 px-6 pb-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-[#0081cc] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <CTAButton
                href="tel:+919143287928"
                className="w-full flex justify-center items-center space-x-2 bg-[#cf2d2d] hover:bg-[#a62424]"
              >
                <Phone className="w-4 h-4" />
                <span>AMBULANCE: 9143287928</span>
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
