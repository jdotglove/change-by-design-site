import Link from "next/link";

export default function Coaching() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Executive Coaching for SMB Leaders
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Get the strategic guidance and accountability you need to drive measurable 
            business results and lead with confidence.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Delivering Measurable Business Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our coaching isn't just about personal development—it's about driving real business results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { number: '2-4x', label: 'Faster leadership development' },
              { number: '85%', label: 'Of clients achieve key goals' },
              { number: '6:1', label: 'Average ROI on coaching investment' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-5xl font-bold text-blue-700 mb-2">{stat.number}</div>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Practical, Results-Focused Coaching for SMB Leaders
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                In today's fast-moving business environment, you need more than just theory—you need 
                practical strategies that deliver immediate impact. Our coaching is built around 
                your specific business challenges and opportunities.
              </p>
              <ul className="space-y-4 text-slate-600 mb-8">
                {[
                  '90-minute intensive sessions focused on your top priorities',
                  'Actionable frameworks tailored to SMB realities',
                  'Clear metrics to track progress and ROI',
                  'Email support between sessions',
                  'Quarterly strategy reviews'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact" 
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Schedule Your Free Consultation
              </Link>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Who This Is For</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Founders & CEOs',
                    description: 'Scale your leadership as you grow your business',
                    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  },
                  {
                    title: 'Executives & Directors',
                    description: 'Enhance your strategic impact and leadership presence',
                    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  },
                  {
                    title: 'High-Potential Leaders',
                    description: 'Prepare for greater responsibility and impact',
                    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Coaching Journey</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured yet flexible approach designed to maximize your growth and impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#235ba8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Discovery</h3>
              <p className="text-slate-600">
                Comprehensive assessment of your current leadership style, challenges, and aspirations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#235ba8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Design</h3>
              <p className="text-slate-600">
                Create a personalized coaching plan with clear objectives and success metrics
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#235ba8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Develop</h3>
              <p className="text-slate-600">
                Regular coaching sessions focused on skill building and behavioral change
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#235ba8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Deploy</h3>
              <p className="text-slate-600">
                Apply new skills in real-world scenarios with ongoing support and feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#235ba8]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a complimentary discovery session to explore how executive coaching 
            can accelerate your leadership journey.
          </p>
          <Link href="/contact" className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule Discovery Session
          </Link>
        </div>
      </section>
    </div>
  );
}
