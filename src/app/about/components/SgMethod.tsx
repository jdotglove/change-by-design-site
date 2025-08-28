import React from 'react';

export default function SgMethod() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The SG Method Framework</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our proven approach to business transformation
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-8">
          {[
            {
              number: 1,
              title: "Clarity = Eliminate Decision Bottlenecks",
              subtitle: "Making the complex simple and the ambiguous clear",
              points: [
                "Strategic alignment that drives growth",
                "Clear roles and decision-making authority",
                "Transparent communication systems"
              ]
            },
            {
              number: 2,
              title: "Culture = Retain Your Best People",
              subtitle: "Creating environments where talent chooses to stay and grow",
              points: [
                "Inclusive, high-performance culture design",
                "Trust and accountability systems",
                "Competitive retention strategies"
              ]
            },
            {
              number: 3,
              title: "Capability = Future-Proof Your Investment",
              subtitle: "Building skills and systems that scale with growth",
              points: [
                "Leadership development at every level",
                "Team problem-solving capacity",
                "Learning systems that compound ROI"
              ]
            },
            {
              number: 4,
              title: "Continuity = Sustainable Competitive Advantage",
              subtitle: "Embedding change that lasts beyond the engagement",
              points: [
                "Sustainable habits and systems",
                "Change-ready organizational DNA",
                "Adaptive capacity for future challenges"
              ]
            }
          ].map((item) => (
            <div key={item.number} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 mt-1 flex-shrink-0">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.subtitle}</p>
                  <ul className="space-y-2 text-slate-600">
                    {item.points.map((point, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
