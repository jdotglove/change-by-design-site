import Link from "next/link";

export default function Coaching() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-slate-900">Executive Excellence</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/coaching" className="text-blue-600 font-medium">Executive Coaching</Link>
              <Link href="/training" className="text-slate-700 hover:text-blue-600 font-medium">Leadership Training</Link>
              <Link href="/programs" className="text-slate-700 hover:text-blue-600 font-medium">Programs</Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Executive Coaching
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Personalized one-on-one coaching designed to unlock your leadership potential 
            and accelerate your executive impact.
          </p>
        </div>
      </section>

      {/* Coaching Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                A Transformational Approach to Leadership
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                My executive coaching methodology combines proven leadership frameworks with 
                personalized strategies tailored to your unique challenges and goals.
              </p>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>360-degree leadership assessment and feedback analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customized development plans with measurable outcomes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular progress reviews and strategy adjustments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ongoing support and accountability partnerships</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Coaching Focus Areas</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-2">Executive Presence</h4>
                  <p className="text-slate-600 text-sm">Develop commanding leadership presence and authentic communication skills</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-2">Strategic Thinking</h4>
                  <p className="text-slate-600 text-sm">Enhance decision-making capabilities and long-term strategic vision</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-2">Team Leadership</h4>
                  <p className="text-slate-600 text-sm">Build high-performing teams and foster collaborative cultures</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-2">Change Management</h4>
                  <p className="text-slate-600 text-sm">Navigate organizational transformation with confidence and clarity</p>
                </div>
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
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Discovery</h3>
              <p className="text-slate-600">
                Comprehensive assessment of your current leadership style, challenges, and aspirations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Design</h3>
              <p className="text-slate-600">
                Create a personalized coaching plan with clear objectives and success metrics
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Develop</h3>
              <p className="text-slate-600">
                Regular coaching sessions focused on skill building and behavioral change
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Deploy</h3>
              <p className="text-slate-600">
                Apply new skills in real-world scenarios with ongoing support and feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a complimentary discovery session to explore how executive coaching 
            can accelerate your leadership journey.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule Discovery Session
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h4 className="text-2xl font-bold mb-4">Executive Excellence</h4>
              <p className="text-slate-300 mb-4">
                Empowering leaders to achieve exceptional results through personalized coaching, 
                comprehensive training, and strategic program development.
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
                <li>info@executiveexcellence.com</li>
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
