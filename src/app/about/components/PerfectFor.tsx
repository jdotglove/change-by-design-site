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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Perfect For Organizations That</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We specialize in helping businesses that need real, measurable results
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - List */}
          <div className="grid gap-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-lg text-slate-800">{item}</p>
              </div>
            ))}
          </div>
          
          {/* Right Column - Grouping Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group max-w-lg w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-200 to-blue-200 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative transform transition-all duration-300 group-hover:scale-[1.02]">
                <img 
                  src="/grouping-image.png" 
                  alt="Organizations that benefit from Change by Design" 
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
