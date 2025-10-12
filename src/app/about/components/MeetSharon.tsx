import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function MeetSharon() {
  const achievements = [
    '20+ years of experience, including Fortune 500 director-level experience',
    'Expertise in systematic transformation',
    'Saville Assessment certified in talent analytics & leadership development',
    'Master\'s degree in human relations',
    'Award-winning "Best in Class" solutions'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="aspect-w-3 h-full aspect-h-4 rounded-2xl bg-slate-100 overflow-hidden">
              {/* Placeholder for Sharon's photo - replace with actual image */}
              <img src="/Glover_S_Pic.jpg" alt="Sharon Glover" className="object-cover w-full h-full" />
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
                <svg className="h-32 w-32 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-7">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Sharon Glover, Founder of Change by Design</h2>
            <p className="text-xl text-slate-600 mb-8">
              Transformation strategist who gets results while your business keeps moving
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-slate-700">{achievement}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800 font-medium">
                Her superpower: <span className="text-slate-900 font-semibold">Building future-ready cultures where everyone thrives through science-backed talent insights</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
