import Link from "next/link";

export default function Programs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-slate-900">Change By Design</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/coaching" className="text-slate-700 hover:text-blue-600 font-medium">Executive Coaching</Link>
              <Link href="/training" className="text-slate-700 hover:text-blue-600 font-medium">Leadership Training</Link>
              <Link href="/programs" className="text-blue-600 font-medium">Programs</Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Culture into Your Competitive Advantage
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Your SMB isn&apos;t just losing people, you&apos;re missing the performance potential that comes from
            engaged, systematically developed teams. While turnover costs $75K-$150K per employee
            (SHRM), the real opportunity lies in building cultures where satisfaction increases 95%,
            efficiency improves 75%, and teams consistently deliver high performance.
          </p>
          <p className="text-xl mb-8 opacity-90">
            With only 30% of employees truly engaged and organizations struggling to build systematic
            capability, you need a learning-driven transformation that turns your people challenges into
            sustainable competitive advantages.
          </p>
          <p className="text-2xl font-semibold mb-8">
            What if you could build a culture so strong that high performance becomes your standard
            operating procedure?
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Transform Your Business
          </Link>
        </div>
      </section>

      {/* The SG Method */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Real-Time Assessment → Systematic Implementation → Measurable Results
            </h2>
            <p className="text-xl text-slate-600 max-w-5xl mx-auto">
              We don&apos;t study your problems—we solve them while you keep running your business. Our
              systematic approach delivers measurable improvements through proven frameworks, not quick
              fixes.
            </p>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">The SG Method: 4 C&apos;s That Drive Results</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">1</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Real-time Assessment</h4>
                <p className="text-slate-600">
                  Comprehensive evaluation of leadership, teams, and operations
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">2</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Strategic Implementation</h4>
                <p className="text-slate-600">
                  High-impact solutions tailored to your organization&apos;s needs
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">3</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Capability Building</h4>
                <p className="text-slate-600">
                  Developing leadership and team capabilities for lasting impact
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">4</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Continuous Optimization</h4>
                <p className="text-slate-600">
                  Refining systems and processes for sustained success
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Approach</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-700">
                  <span className="font-semibold">Phase 1:</span> Real-time assessment across leadership, teams, and operations
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-700">
                  <span className="font-semibold">Phase 2:</span> Implementation of high-impact solutions at all levels
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-700">
                  <span className="font-semibold">Phase 3:</span> Optimization and future-proofing systems
                </p>
              </div>
              <div className="text-center mt-8">
                <p className="text-xl font-semibold text-blue-700">
                  No lengthy studies. No theoretical frameworks. Just results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Proven SMB Results</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real outcomes from organizations that have transformed with our approach
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-4xl font-bold mb-4">95%</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Increase in Employee Satisfaction</h3>
              <p className="text-slate-600">
                Thrivent (8,500 employees) transformed their workplace culture, leading to significantly higher engagement and retention.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-4xl font-bold mb-4">33%</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Reduction in Turnover</h3>
              <p className="text-slate-600">
                A global QSR chain with 700+ team members significantly reduced turnover costs and improved team stability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-4xl font-bold mb-4">75%</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Efficiency Improvement</h3>
              <p className="text-slate-600">
                Multiple retail pharmacy chains achieved dramatic operational improvements through systematic process redesign.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-4xl font-bold mb-4">40%</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Reduction in Team Confusion</h3>
              <p className="text-slate-600">
                Organizations achieved clearer communication and alignment through systematic leadership processes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-4xl font-bold mb-4">{'<6mo'}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Break-even Timeline</h3>
              <p className="text-slate-600">
                Most clients achieve full ROI through retention savings alone in under six months.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready to See Similar Results?</h3>
              <p className="text-slate-700 mb-6">
                Let&apos;s discuss how we can help transform your organization&apos;s culture and performance.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full text-center"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Transformation Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Flexible program formats designed to meet diverse organizational transformation needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Culture Transformation</h3>
              <p className="text-slate-600 mb-6">
                Comprehensive programs to reshape organizational culture, values, and behaviors 
                for sustainable change and innovation.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  6-18 month duration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Organization-wide impact
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cultural transformation focus
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation Acceleration</h3>
              <p className="text-slate-600 mb-6">
                Design thinking programs to build innovation capabilities, foster creativity, 
                and accelerate product and service development.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  3-9 month duration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cross-functional teams
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Innovation methodology focus
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Change Leadership</h3>
              <p className="text-slate-600 mb-6">
                Intensive programs for leaders navigating major organizational transitions, 
                mergers, digital transformation, or strategic pivots.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  4-12 month duration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Senior leadership focus
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transformation leadership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Transformation Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from organizations that embraced change by design
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  F
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">FinTech Innovator</h4>
                  <p className="text-slate-600 text-sm">Series C Company, 500+ employees</p>
                </div>
              </div>
              <blockquote className="text-slate-700 mb-6 italic">
                &lsquot;The culture transformation program revolutionized how we approach innovation. 
                Our time-to-market improved by 60% and employee satisfaction reached an all-time high.&rsquot;
              </blockquote>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-600">60%</div>
                  <div className="text-sm text-slate-600">Faster TTM</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">95%</div>
                  <div className="text-sm text-slate-600">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">4.2x</div>
                  <div className="text-sm text-slate-600">Innovation Rate</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#235ba8] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Retail Giant</h4>
                  <p className="text-slate-600 text-sm">Fortune 100 Company, 50,000+ employees</p>
                </div>
              </div>
              <blockquote className="text-slate-700 mb-6 italic">
                &lsquot;Our digital transformation accelerated dramatically with the change leadership program. 
                We successfully pivoted our entire business model in record time.&rsquot;
              </blockquote>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-amber-600">18mo</div>
                  <div className="text-sm text-slate-600">Transformation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">300%</div>
                  <div className="text-sm text-slate-600">Digital Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">85%</div>
                  <div className="text-sm text-slate-600">Change Adoption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Design Your Transformation?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let&apos;s co-create a custom program that drives meaningful change and 
            sustainable growth for your organization.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors">
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
