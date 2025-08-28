import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Transform Your Business
            <span className="text-[#235ba8] block">At SMB Speed & Scale</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto">
            We help small-to-medium businesses achieve enterprise-level results through practical, 
            measurable leadership and organizational transformation. No theory—just real solutions 
            that drive growth and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#235ba8] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1e4a8c] transition-colors">
              Get Started
            </Link>
            <Link href="#why-choose-us" className="border-2 border-[#235ba8] text-[#235ba8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With Us</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We deliver real results by focusing on what works in the real world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: 'Pragmatic',
                description: 'Solutions that work in the real world, not just on paper',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Agile',
                description: 'Fast, adaptive, and responsive to your changing needs',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z'
              },
              {
                title: 'Results-Driven',
                description: 'Everything measured, everything accountable',
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              },
              {
                title: 'Empathetic',
                description: 'We understand SMB constraints and challenges',
                icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
              },
              {
                title: 'Future-Focused',
                description: 'Building capability for tomorrow\'s challenges',
                icon: 'M13 10h.01v5.172a2 2 0 01-.586 1.414l-4.828 4.828a2 2 0 01-2.564.25l-3.5-2.5a2 2 0 01-.64-2.38l1.37-3.37A2 2 0 014.5 10h5.5z M12 6a2 2 0 100-4 2 2 0 000 4z'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#235ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Proven Solutions for SMB Growth</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We deliver enterprise-level transformation at SMB speed and scale. 
              Every solution is designed to deliver measurable ROI and sustainable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#235ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Executive Coaching</h4>
              <p className="text-slate-600 mb-6">
                Practical, results-focused coaching that helps leaders navigate challenges, make better decisions, 
                and drive measurable business outcomes.
              </p>
              <Link href="/coaching" className="text-[#235ba8] font-semibold hover:text-[#1e4a8c]">
                Learn More →
              </Link>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#62a044]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Leadership Development</h4>
              <p className="text-slate-600 mb-6">
                Customized training that builds leadership capability at every level, with a focus on practical skills 
                that drive immediate impact.
              </p>
              <Link href="/training" className="text-[#62a044] font-semibold hover:text-[#4d7f37]">
                Learn More →
              </Link>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#615d59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Organizational Transformation</h4>
              <p className="text-slate-600 mb-6">
                End-to-end solutions that align leadership, culture, and systems to drive sustainable 
                business performance and growth.
              </p>
              <Link href="/programs" className="text-[#615d59] font-semibold hover:text-[#4a4743]">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#235ba8]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Leadership?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards transformational leadership development
          </p>
          <Link href="/contact" className="bg-white text-[#235ba8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
