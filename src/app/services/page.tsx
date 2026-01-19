"use client";
import Button from '@/components/Button';
import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Four Ways We Deliver Real-World Solutions
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Change by Design combines enterprise experience with practical application. Every solution is
            designed for sustainable impact and measurable ROI.
          </p>
          <Button href="/contact" variant="secondary">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Our Transformation Services
            </h2>
            <p className="text-xl text-black max-w-4xl mx-auto">
              Change by Design&apos;s comprehensive solutions designed to turn your leadership
              challenges into competitive advantages
            </p>
          </div>

          {/* 4-C Image with Animation */}
          <div 
            ref={imageRef}
            className={`mb-16 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex justify-center">
              <div className="relative group max-w-2xl w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-xl transform transition-all duration-300 group-hover:scale-[1.02]">
                  <img 
                    src="/4-c-image.png" 
                    alt="Change by Design 4 C's Framework" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Executive Coaching */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-black">
                  Executive Coaching (Capability)
                </h3>
              </div>
              <p className="text-black mb-4 font-medium">
                Turn leadership challenges into strategic advantages
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Saville Assessment-powered leadership profiling for targeted
                    development
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    One-on-one strategic partnerships backed by psychometric
                    insights
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Real-time process optimization during critical business
                    moments
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Practical decision-making frameworks that eliminate
                    operational bottlenecks
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Perfect for: CEOs, senior executives, high-potential leaders
                  </span>
                </li>
              </ul>
            </div>

            {/* Leadership Development */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-black">
                  Leadership Development (Continuity)
                </h3>
              </div>
              <p className="text-black mb-4 font-medium">
                Build systematic leadership capability that scales
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Scientific talent assessment to identify high-potential
                    leaders
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Step-by-step leadership systems tailored to individual
                    strengths
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Process improvement training that converts managers into
                    efficiency experts
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Feedback loops that catch problems before they become crises
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Perfect for: Leadership teams, emerging leaders, succession
                    planning
                  </span>
                </li>
              </ul>
            </div>

            {/* Culture Transformation */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border border-amber-100">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-black">
                  Culture Transformation (Culture)
                </h3>
              </div>
              <p className="text-black mb-4 font-medium">
                Create healthy cultures that drive competitive advantage
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Comprehensive talent analytics define core beliefs that
                    guide daily decisions
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Process mapping that identifies and eliminates cultural
                    friction points
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Model and celebrate behaviors aligned with proven
                    personality predictors
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Build adaptive systems that evolve with your business and
                    workforce insights
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Perfect for: Culture transformation, business
                    transformation, sustainable growth, scaling{" "}
                  </span>
                </li>
              </ul>
            </div>

            {/* Ways of Working Transformation */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-800 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-black">
                  Ways of Working Transformation (Clarity)
                </h3>
              </div>
              <p className="text-black mb-4 font-medium">
                Redesign how work gets done for immediate impact
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Eliminate organizational friction that slows performance and frustrates talent
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Redesign collaboration patterns, decision flows, and work structures in real-time
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Create operating rhythms that drive both efficiency and engagement
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Transform systems and processes while building the culture to sustain them
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black">
                    Perfect for: Operational efficiency, scaling organizations, post-merger integration, remote/hybrid transformation
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Saville Assessment Wave Platform */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200 max-w-4xl mx-auto">
              <p className="text-lg text-slate-700 font-medium">
                Built on Saville Assessment&apos;s award-winning Wave platform—the strongest predictor of workplace performance and potential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#235ba8]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a complimentary discovery session to explore how Change by Design&aspos;s
            services can accelerate your transformation journey.
          </p>
          <Button href="/contact" variant="secondary">
            Schedule Discovery Session
          </Button>
        </div>
      </section>
    </div>
  );
}
