import Button from "@/components/Button";
import MeetSharon from "@/app/about/components/MeetSharon";
import SgMethod from "@/app/about/components/SgMethod";
import PerfectFor from "@/app/about/components/PerfectFor";

export default function About() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Brand & Philosophy</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Change by Design delivers real-time transformation that works with your existing systems and delivers measurable results
          </p>
        </div>
      </section>

      <MeetSharon />
      <SgMethod />
      <PerfectFor />

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Experience the power of Change by Design&apos;s real-time transformation that delivers measurable results
          </p>
          <Button href="/contact" variant="secondary">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
