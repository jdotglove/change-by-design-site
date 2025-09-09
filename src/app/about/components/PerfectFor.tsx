import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function PerfectFor() {
  const items = [
    'Fight for talent in competitive markets',
    'Need rapid ROI with limited HR resources',
    'Want to scale from 25 to 8,500+ employees efficiently',
    'Demand measurable transformation results',
    'Demand measurable transformation and process optimization results',
    'Struggle with operational bottlenecks that slow growth',
    'Need workflow improvements without business disruption',
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Perfect For Organizations That</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We specialize in helping businesses that need real, measurable results
          </p>
        </div>
        
        <div className="grid gap-4 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-lg text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
