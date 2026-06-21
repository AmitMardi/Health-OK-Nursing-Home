import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <div className="pt-[140px]">
      <div className="bg-[#0081cc] text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          Learn more about our mission, vision, and the legacy of healthcare excellence.
        </p>
      </div>
      <AboutSection />
    </div>
  );
}
