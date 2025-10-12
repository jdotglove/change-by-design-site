import React from 'react';

export default function SgMethod() {
  return (
    <React.Fragment>
      {/* Why Leaders Choose Us */}
      <section id="why-choose-us" className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Leaders Choose Us</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Enterprise-proven solutions that deliver measurable results and lasting impact
            </p>
          </div>
          
          <div className="flex gap-6">
            {[
              {
                title: 'Speed Over Studies',
                description: 'Real-time implementation and process optimization while you work',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                emoji: '⚡'
              },
              {
                title: 'Results Over Reports',
                description: 'Measurable ROI backed by scientific talent analytics and efficiency gains',
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                emoji: '📊'
              },
              {
                title: 'Practical Over Perfect',
                description: 'Live process improvements using proven psychometric data and Lean methodologies',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                emoji: '🔧'
              },
              {
                title: 'Culture Health Focus',
                description: 'Systematic transformation that reduces friction and increases flow',
                icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                emoji: '❤️'
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-50 shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  {item.emoji}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-6">
            {[
              {
                title: 'Enterprise Proven',
                description: 'Fortune 500 experience enhanced by award-winning assessment technology',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                emoji: '🏆'
              },
              {
                title: 'Science-Backed Solutions',
                description: 'Saville Assessment Wave platform reduces bad hires from 1-in-5 to 1-in-50',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                emoji: '🔬'
              },
              {
                title: 'Complete Transformation',
                description: 'We don\'t just shift mindsets or repair processes — we reimagine how work really gets done',
                icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
                emoji: '🔄'
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-50 shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  {item.emoji}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
