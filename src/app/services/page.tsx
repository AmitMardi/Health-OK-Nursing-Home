import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <div className="pt-[140px]">
      <div className="bg-[#0081cc] text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          Comprehensive healthcare solutions tailored to your needs.
        </p>
      </div>
      <ServicesSection />
    </div>
  );
}
