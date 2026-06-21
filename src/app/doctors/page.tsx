import DoctorsSection from "@/components/DoctorsSection";

export default function DoctorsPage() {
  return (
    <div className="pt-[140px]">
      <div className="bg-[#0081cc] text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Doctors</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          Meet our team of experienced and dedicated medical professionals.
        </p>
      </div>
      <DoctorsSection />
    </div>
  );
}
