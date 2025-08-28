import React from 'react';

export default function BrandPersonality() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Brand Personality</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Traits</h3>
            <ul className="space-y-3 text-slate-700">
              {[
                "Pragmatic: Solutions that work in the real world, not just on paper",
                "Agile: Fast, adaptive, responsive to changing business needs",
                "Results-Driven: Everything measured, everything accountable",
                "Empathetic: Understanding of SMB constraints and challenges",
                "Future-Focused: Building capability for tomorrow's challenges"
              ].map((trait, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Brand Voice</h3>
            <ul className="space-y-3 text-slate-700 mb-8">
              {[
                "Tone: Confident but approachable, direct but supportive",
                "Style: Clear, jargon-free, results-oriented",
                "Personality: The trusted advisor who gets things done"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Communication Principles</h3>
            <ul className="space-y-3 text-slate-700">
              {[
                "Speak ROI, not theory",
                "Use concrete examples and measurable outcomes",
                "Address real constraints (time, budget, resources)",
                "Lead with empathy, deliver with precision"
              ].map((principle, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
