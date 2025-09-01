import React from 'react';

export default function BrandPositioning() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Brand Positioning</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Category</h3>
            <p className="text-slate-600">Real-Time Business Transformation Consulting</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Target Audience</h3>
            <p className="text-slate-600 mb-2">
              <span className="font-medium">Primary:</span> CEOs and senior leaders of 25-150 person businesses experiencing rapid growth, talent challenges, or performance gaps
            </p>
            <p className="text-slate-600">
              <span className="font-medium">Secondary:</span> HR directors and operations leaders in resource-constrained organizations seeking measurable ROI from leadership development
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Competitive Differentiation</h3>
            <p className="text-slate-600">
              While traditional consultants move at the speed of analysis, we move at the speed of business—delivering measurable ROI in 90 days through our proven SG Method framework.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Unique Value Proposition</h3>
            <p className="text-blue-700 text-lg">
              &lsquot;Real-time transformation that works with your existing systems, delivers measurable ROI within 6 months, and requires minimal time investment from leadership.&rsquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
