"use client";
import { EyeIcon, UserGroupIcon, AcademicCapIcon, ArrowPathIcon, CheckIcon } from "@heroicons/react/24/outline";
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6 transition-all duration-500" style={{ transform: scrolled ? 'scale(0.5)' : 'scale(1)', opacity: scrolled ? 0 : 1 }}>
            <img src="/ChangeByDesignLogo.png" alt="Change By Design Logo" className="w-96 mx-auto" />
          </div>
          <p className=" block text-3xl mt-4 font-normal text-[#235ba8] mb-8 max-w-3xl mx-auto">
            Transform leadership, culture, and how work gets done—at the speed of business.
          </p>
          <div className="text-slate-500 mb-8">
            20+ years | Fortune 500 experience | Real-time Results
          </div>
          <Button href="/contact" variant="primary">
            Get Your Strategy Session
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">The Problem Most Leaders Face</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 mb-6">
              Your organization isn&apos;t just losing people, you&apos;re missing the performance potential of
              engaged, systematically developed teams.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
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
            <p className="text-xl font-semibold text-slate-800 mt-10 italic">
              What if high performance became your standard operating procedure?
            </p>
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
      <section className="py-16 bg-[#235ba8]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Traditional consulting moves at the speed of analysis. Change by Design moves at the speed of business. 
          </p>
          <Button href="/contact" variant="secondary">
            Get Your Custom Strategy Session
          </Button>
        </div>
      </section>
    </div>
  );
}
