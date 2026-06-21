import React from "react";
import { Baby, Stethoscope, Activity, Sparkles, Brain, Bone, HeartPulse, PersonStanding } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: "Births",
    description: "Dedicated maternity care, supporting you throughout pregnancy, childbirth, and postpartum.",
    icon: <Baby className="w-8 h-8 text-white" />,
  },
  {
    title: "Dental",
    description: "Superior quality dental services, from routine check-ups to specialized treatments, ensuring lasting smiles.",
    icon: <Sparkles className="w-8 h-8 text-white" />,
  },
  {
    title: "X-ray",
    description: "Affordable precision diagnostic imaging services for accurate diagnoses and effective treatment planning.",
    icon: <Activity className="w-8 h-8 text-white" />,
  },
  {
    title: "Pregnancy",
    description: "Expert care for a healthy pregnancy journey, providing comprehensive support from prenatal to delivery.",
    icon: <Stethoscope className="w-8 h-8 text-white" />,
  },
  {
    title: "Neurology",
    description: "Advanced care for neurological issues, offering precise diagnostics and tailored treatments.",
    icon: <Brain className="w-8 h-8 text-white" />,
  },
  {
    title: "Orthopedic",
    description: "Comprehensive orthopedic services, providing personalized solutions for bone and joint health.",
    icon: <Bone className="w-8 h-8 text-white" />,
  },
  {
    title: "Cardiology",
    description: "Modern and high-tech cardiology services, using state-of-the-art machines for optimal heart wellness.",
    icon: <HeartPulse className="w-8 h-8 text-white" />,
  },
  {
    title: "Prostheses",
    description: "Custom-fitted prosthetic solutions, restoring mobility through personalized and caring service.",
    icon: <PersonStanding className="w-8 h-8 text-white" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#013142] mb-4">
            Our Speciality
          </h2>
          <p className="text-lg text-gray-600">
            We have an all-day running OPD that facilitates doctors with multiple
            specializations and vast experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-[#fcba03] group"
            >
              <div className="w-16 h-16 rounded-full bg-[#0081cc] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#013142] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
