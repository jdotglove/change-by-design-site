import Link from "next/link";

export default function Training() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-slate-900">Change By Design</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-orange-600 font-medium">Home</Link>
              <Link href="/coaching" className="text-slate-700 hover:text-orange-600 font-medium">Executive Coaching</Link>
              <Link href="/training" className="text-orange-600 font-medium">Leadership Training</Link>
              <Link href="/programs" className="text-slate-700 hover:text-orange-600 font-medium">Programs</Link>
              <Link href="/contact" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Leadership Training
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Comprehensive training programs designed to develop strong, effective leaders 
            at every organizational level.
          </p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Training Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven methodologies and practical tools to build exceptional leadership capabilities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Emerging Leaders Program</h3>
              <p className="text-slate-600 mb-6">
                A comprehensive 6-month program designed for high-potential employees transitioning 
                into leadership roles.
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Leadership fundamentals and self-awareness</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Communication and influence skills</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Team building and collaboration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Performance management essentials</span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">6 months • 12 sessions</span>
                <Link href="/contact" className="text-orange-600 font-semibold hover:text-orange-700">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Advanced Leadership Mastery</h3>
              <p className="text-slate-600 mb-6">
                An intensive program for experienced leaders looking to elevate their strategic 
                impact and organizational influence.
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strategic thinking and vision development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Change leadership and transformation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Executive presence and influence</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Building high-performance cultures</span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">4 months • 8 intensive sessions</span>
                <Link href="/contact" className="text-amber-600 font-semibold hover:text-amber-700">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Options */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Workshop Series</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Focused, interactive workshops targeting specific leadership competencies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Crucial Conversations</h3>
              <p className="text-slate-600 mb-4">
                Master the art of difficult conversations and conflict resolution in leadership contexts.
              </p>
              <div className="text-sm text-slate-500">Half-day workshop</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Leading Through Change</h3>
              <p className="text-slate-600 mb-4">
                Develop skills to navigate and lead organizational transformation effectively.
              </p>
              <div className="text-sm text-slate-500">Full-day workshop</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Building High-Performance Teams</h3>
              <p className="text-slate-600 mb-4">
                Learn strategies to create, motivate, and sustain exceptional team performance.
              </p>
              <div className="text-sm text-slate-500">Full-day workshop</div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Evidence-Based Training Methodology
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Our training programs are built on proven leadership research and real-world 
                application, ensuring practical and lasting impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Interactive Learning</h4>
                    <p className="text-slate-600">Engaging workshops with hands-on exercises and real-world scenarios</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Peer Learning</h4>
                    <p className="text-slate-600">Collaborative environment fostering shared experiences and insights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Action Planning</h4>
                    <p className="text-slate-600">Concrete takeaways and implementation strategies for immediate application</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Training Outcomes</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">Leadership Confidence</span>
                    <span className="text-orange-600 font-semibold">+85%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">Team Engagement</span>
                    <span className="text-amber-600 font-semibold">+78%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">Strategic Impact</span>
                    <span className="text-red-600 font-semibold">+92%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Invest in Your Leadership Development
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join our next training cohort and accelerate your leadership journey with 
            proven methodologies and expert guidance.
          </p>
          <Link href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors">
            Explore Training Options
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h4 className="text-2xl font-bold mb-4">Change By Design</h4>
              <p className="text-slate-300 mb-4">
                Transforming organizations through innovative leadership development, strategic change management, 
                and custom-designed solutions that drive sustainable growth.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/coaching" className="hover:text-white">Executive Coaching</Link></li>
                <li><Link href="/training" className="hover:text-white">Leadership Training</Link></li>
                <li><Link href="/programs" className="hover:text-white">Custom Programs</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-slate-300">
                <li>info@changebydesign.com</li>
                <li>(555) 123-4567</li>
                <li><Link href="/contact" className="hover:text-white">Get in Touch</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Executive Excellence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
