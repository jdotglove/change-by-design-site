"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import Button from '@/components/Button';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'url(/hero-section-image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-800/60"></div>
        
        {/* Opaque Card with Content */}
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16">
            <div className="text-center">
              <div className="mb-6 transition-all duration-500" style={{ transform: scrolled ? 'scale(0.5)' : 'scale(1)', opacity: scrolled ? 0 : 1 }}>
                <img src="/ChangeByDesignLogo.png" alt="Change By Design Logo" className="w-96 mx-auto" />
              </div>
              <p className="block text-3xl mt-4 font-normal text-[#235ba8] mb-8 max-w-3xl mx-auto">
                Transform leadership, culture, and how work gets done—at the speed of business.
              </p>
              <div className="text-slate-500 mb-8">
                20+ years | Fortune 500 experience | Real-time Results
              </div>
              <Button href="/contact" variant="primary">
                Get Your Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Problem Most Leaders Face</h3>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Problem Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/the-problem-image.png" 
                  alt="Leadership challenges and organizational problems" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Problem Content */}
            <div className="order-1 lg:order-2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg text-slate-700 mb-6">
                  Your organization isn&apos;t just losing people, you&apos;re missing the performance potential of
                  engaged, systematically developed teams.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-xl font-semibold text-red-700 mb-3">The Cost</h4>
                    <p className="text-2xl font-bold text-slate-800">$75K-$150K</p>
                    <p className="text-sm text-slate-600 mt-1">per departing employee</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-xl font-semibold text-green-700 mb-3">The Opportunity</h4>
                    <ul className="text-left space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>95% satisfaction increases</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>75% efficiency gains</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Another benefit</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-xl font-semibold text-slate-800 mt-8 italic">
                  What if high performance became your standard operating procedure?
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ text: '40% confusion reduction', subtext: 'through systematic processes' },
              { text: '33% turnover reduction', subtext: '(700-person global chain)' },
              { text: 'Break-even in 6 months', subtext: 'through retention savings' }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div>
                  <p className="font-medium text-slate-900">{item.text}</p>
                  <p className="text-sm text-slate-500">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#235ba8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Image Section */}
            <div className="mb-12 flex justify-center">
              <div className="relative group max-w-lg w-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative transform transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-2">
                  <img 
                    src="/footer-image.png" 
                    alt="Change by Design" 
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform?
              </h3>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                Traditional consulting moves at the speed of analysis. Change by Design moves at the speed of business. 
              </p>
              <Button href="/contact" variant="secondary">
                Get Your Custom Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
