import { EyeIcon, UserGroupIcon, AcademicCapIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Change by Design
            <span className="text-[#235ba8] block text-4xl mt-4 font-normal">Transform Leadership Challenges into Competitive Advantages</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Enterprise-proven culture transformation and real-time process improvement at the
            speed of business.
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
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>95% satisfaction increases</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>75% efficiency gains</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sustainable High Performance</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-xl font-semibold text-slate-800 mt-10 italic">
              What if high performance became your standard operating procedure?
            </p>
          </div>
        </div>
      </section>

      {/* Systematic Approach Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Systematic Approach Delivers Real-World Solutions</h2>
            <p className="text-xl text-black max-w-4xl mx-auto">
            The 4 C&apos;s Framework Powered by Scientific Assessment & Real-Time Process Improvement 
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Clarity */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <EyeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-black">Clarity</h3>
              </div>
              <p className="text-black mb-4 font-medium">Turn confusion into clear action</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Start with the Saville Assessment Wave platform to identify leadership strengths and development priorities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Map current processes in real-time to eliminate bottlenecks while you work</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Reduce operational confusion by 40% through systematic processes</span>
                </li>
              </ul>
            </div>

            {/* Culture */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <UserGroupIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-black">Culture</h3>
              </div>
              <p className="text-black mb-4 font-medium">Transform people challenges into retention advantages</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Design feedback systems that prevent talent flight</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Build trust-based cultures that outcompete salary increases</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Implement real-time process improvements that reduce employee frustration</span>
                </li>
              </ul>
            </div>

            {/* Capability */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border border-amber-100">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 text-amber-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <AcademicCapIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-black">Capability</h3>
              </div>
              <p className="text-black mb-4 font-medium">Develop skills that drive revenue</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Target training at process pain points that directly impact your bottom line using scientific assessment data</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Optimize workflows while building internal expertise instead of expensive external hires</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Apply Lean methodologies for continuous process enhancement</span>
                </li>
              </ul>
            </div>

            {/* Continuity */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <ArrowPathIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-black">Continuity</h3>
              </div>
              <p className="text-black mb-4 font-medium">Make improvements stick and evolve</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Replace rigid SOPs with adaptive playbooks informed by ongoing talent analytics and process optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Embed systems that scale with rapid growth through real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Build capabilities that become competitive moats</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Proven Results</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real impact delivered across industries and organization sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { text: '75% efficiency improvement', subtext: '(multi-location retail)' },
              { text: '40% confusion reduction', subtext: 'through systematic processes' },
              { text: '33% turnover reduction', subtext: '(700-person global chain)' },
              { text: 'Break-even in 6 months', subtext: 'through retention savings' }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <svg className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
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
            Traditional consulting moves at the speed of analysis.  We move at the speed of business. 
          </p>
          <Button href="/contact" variant="secondary">
            Get Your Custom Strategy Session
          </Button>
        </div>
      </section>
    </div>
  );
}
