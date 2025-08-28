import React from 'react';

export default function BrandFoundation() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Brand Foundation</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Mission</h3>
            <p className="text-slate-600">
              To transform small-to-medium businesses into high-performing organizations through 
              real-time assessment, rapid implementation, and measurable results—helping leaders 
              and teams thrive in an ever-changing business landscape.
            </p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Vision</h3>
            <p className="text-slate-600">
              A world where every SMB has the leadership capability, organizational clarity, 
              inclusive culture, and sustainable systems to compete and win—regardless of their 
              size or resources.
            </p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Purpose</h3>
            <p className="text-slate-600">
              We exist to level the playing field for growing businesses by delivering enterprise-level 
              transformation results at SMB speed and scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
