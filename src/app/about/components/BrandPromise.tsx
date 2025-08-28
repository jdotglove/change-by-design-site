import React from 'react';

export default function BrandPromise() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Brand Promise</h2>
          <div className="text-2xl text-blue-700 font-semibold mb-8">
            "We deliver measurable organizational transformation in 90 days that pays for itself within 6 months—guaranteed."
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Supporting Promises</h3>
              <ul className="space-y-3 text-slate-700">
                {[
                  "Real-time assessment and implementation",
                  "Works with existing systems and constraints",
                  "Minimal leadership time investment required",
                  "Future-ready capability building",
                  "Sustainable, lasting change"
                ].map((promise, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{promise}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Proof Points</h3>
              <ul className="space-y-3 text-slate-700">
                {[
                  "40-60% reduction in turnover within 6 months",
                  "60% reduction in project delays from miscommunication",
                  "40% faster decision-making by eliminating bottlenecks",
                  "30% increase in productivity through enhanced collaboration"
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
