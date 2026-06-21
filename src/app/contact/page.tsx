import React from "react";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-[140px]">
      <div className="bg-[#0081cc] text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          We're here to help. Reach out to us for appointments, emergencies, or inquiries.
        </p>
      </div>

      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Details & Map */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#013142] mb-6">Get in Touch</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="bg-[#0081cc]/10 p-3 rounded-full text-[#0081cc] mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Address</h4>
                      <p className="text-gray-600">College More, Buniadpur<br/>Dakshin Dinajpur, West Bengal</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-4">
                    <div className="bg-[#0081cc]/10 p-3 rounded-full text-[#0081cc] mt-1">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Phone</h4>
                      <p className="text-gray-600">03524 296296<br/>+91 91432 87928</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-4">
                    <div className="bg-[#0081cc]/10 p-3 rounded-full text-[#0081cc] mt-1">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@healthokdd.com</p>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="bg-[#cf2d2d]/10 p-3 rounded-full text-[#cf2d2d] mt-1">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Hours</h4>
                      <p className="text-gray-600">24/7 Emergency & OPD</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Embed */}
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-64 relative overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Health+OK+Nursing+Home,+Buniadpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="rounded-xl border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-2/3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
